from django.test import TestCase
from ..models import Player
import bcrypt

def create_test_player(username="Kimberley", email="test@test.com", password="Secure123", pass_confirm="Secure123"):
    return {
        "username": username,
        "email": email,
        "password": password,
        "pass_confirm": pass_confirm
    }

class RegistrationViewTest(TestCase):
    def test_successful_registration_redirect(self):
        new_player = create_test_player()
        response = self.client.post("/register/", new_player)
        self.assertRedirects(response, response.url, status_code=301, target_status_code=200)

    def test_unsuccessful_registration_redirect(self):
        new_player = create_test_player(pass_confirm="Secure456")
        response = self.client.post("/register/", new_player)
        self.assertRedirects(response, "/", status_code=301, target_status_code=200)

class LoginViewTest(TestCase):
    def setUp(self):
        pw_hash = bcrypt.hashpw("Secure123".encode(), bcrypt.gensalt()).decode()
        self.player1 =  Player.objects.create(username="Kim", email="test@test.com", password=pw_hash)

    def test_successful_login_redirect(self):
        existing_player = create_test_player()
        response = self.client.post("/login/", existing_player)
        self.assertRedirects(response, response.url, status_code=301, target_status_code=200)

    def test_unsuccessful_login_redirect(self):
        existing_player = create_test_player(password="Secure456")
        response = self.client.post("/login/", existing_player)
        self.assertRedirects(response, "/", status_code=301, target_status_code=200)
