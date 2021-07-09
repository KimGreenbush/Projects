from django.test import TestCase
import bcrypt
from apps.Arcade.models import Player

def create_test_player(username="Kim", email="test@test.com", password="Secure123", pass_confirm="Secure123"):
    player = {
        "username" : username,
        "email" : email,
        "password" : password,
        "pass_confirm" : pass_confirm,
    }
    return Player.objects.register_validator(player)

def validate_test_player(email="test@test.com", password="Secure123"):
    user = {
        "email": email,
        "password": password
    }
    return Player.objects.login_validator(user)

class RegistrationValidationTest(TestCase):
    def setUp(self):
        self.player = Player.objects.create(username="Kim", email="test1@test.com", password="Secure123")

    def test_create_player(self):
        self.assertIsNotNone(self.player)

    def test_validate_user(self):
        a_user = create_test_player()
        self.assertEquals(len(a_user), 0)

    def test_username_less_than_three(self):
        short_username = create_test_player(username="Ki")
        self.assertGreater(len(short_username), 0)

    def test_username_greater_than_nine(self):
        long_username = create_test_player(username="Kimberleyy")
        self.assertGreater(len(long_username), 0)

    def test_email_isUnavailable(self):
        Player.objects.create(username="Kim", email="test@test.com", password="Secure123")
        unavailable_email = create_test_player()
        self.assertGreater(len(unavailable_email), 0)

    def test_email_regex(self):
        bad_email = create_test_player(email="test@test")
        self.assertGreater(len(bad_email), 0)

    def test_password_less_than_eight(self):
        bad_pass = create_test_player(password="NotSafe")
        self.assertGreater(len(bad_pass), 0)

    def test_confirm_password_match(self):
        pass_not_matching = create_test_player(password="NotSafe", pass_confirm="Secure123")
        self.assertGreater(len(pass_not_matching), 0)


class LoginValidationTest(TestCase):
    def test_no_player(self):
        not_a_registered_email = validate_test_player(email="notanemail@notadomain.com")
        self.assertGreater(len(not_a_registered_email), 0)

    def test_player_password_does_not_match_input(self):
        pw_hash = bcrypt.hashpw("Secure123".encode(), bcrypt.gensalt()).decode()
        Player.objects.create(username="Kim", email="test@test.com", password=pw_hash)
        invalid_pass = validate_test_player(password="Hackers1!")
        self.assertGreater(len(invalid_pass), 0)

    def test_player_password_matches_input(self):
        pw_hash = bcrypt.hashpw("Secure123".encode(), bcrypt.gensalt()).decode()
        Player.objects.create(username="Kim", email="test@test.com", password=pw_hash)
        valid_pass = validate_test_player()
        self.assertEquals(len(valid_pass), 0)
