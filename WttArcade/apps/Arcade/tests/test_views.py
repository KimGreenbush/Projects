from django.test import TestCase
from apps.Arcade.models import Player
import bcrypt

def create_test_player(username, email, password, pass_confirm):
    return {
        "username": username,
        "email": email,
        "password": password,
        "pass_confirm": pass_confirm
    }

class RegistrationViewTestCase(TestCase):
    # def test_successful_registration_redirect(self):
    #     new_player = create_test_player(
    #         "Kimberley",
    #         "test1@test1.com",
    #         "Secure123",
    #         "Secure123")
    #     response = self.client.post("/register/", new_player)
    #     self.assertRedirects(response, response.url, status_code=301, target_status_code=200)

    # def test_unsuccessful_registration_redirect(self):
    #     new_player = create_test_player(
    #         "Kimberley",
    #         "test1@test1.com",
    #         "Secure123",
    #         "Secure123")
    #     response = self.client.post("/register/", new_player)
    #     self.assertRedirects(response, response.url, status_code=301, target_status_code=200)

    # def test_successful_login_redirect(self):
        # pw_hash = bcrypt.hashpw("Secure123".encode(), bcrypt.gensalt()).decode()
        # Player.objects.create(username="Kim", email="test@test.com", password=pw_hash)
        # existing_player = create_test_player("Kim", "test@test.com", "Secure123", "Secure123")
        # response = self.client.post("/login/", existing_player)
    #     self.assertRedirects(response, response.url, status_code=301, target_status_code=200)

    def test_unsuccessful_login_redirect(self):
        pw_hash = bcrypt.hashpw("Secure123".encode(), bcrypt.gensalt()).decode()
        Player.objects.create(username="Kim", email="test@test.com", password=pw_hash)
        existing_player = create_test_player("Kim", "test@test.com", "Secure456", "Secure456")
        response = self.client.post("/login/", existing_player)
        self.assertRedirects(response, response.url, status_code=301, target_status_code=200)
