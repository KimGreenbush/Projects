from django.test import TestCase
from django.utils import timezone
from .models import Player

def create_user(username, email, password = "taken"):
    _username = username
    _email = email
    _password = password
    _created_at = timezone.now()
    _updated_at = timezone.now()
    return Player.objects.create(username=_username, email=_email, password=_password, created_at=_created_at, updated_at=_updated_at)

class RegistrationTestCase(TestCase):
    def test_username_too_short(self):
        pass

    def test_username_too_long(self):
        pass

    def test_email_available(self):
        pass

    def test_email_regex(self):
        pass

    def test_password_too_short(self):
        pass

    def test_confirm_password_match(self):
        pass



class LoginTestCase(TestCase):
    def test_no_player(self):
        pass

    def test_player_password_matches_input(self):
        pass
