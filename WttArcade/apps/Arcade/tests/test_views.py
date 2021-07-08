from django.test import TestCase, Client
from apps.Arcade.models import Player

class RegistrationViewTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.player = Player.objects.create(username="Kim", email="test@test.com", password="Secure123")

    def test_create_player(self):
        self.assertIsNotNone(self.player)

    def test_successful_registration_redirect(self):
        new_player = {
            "username" : "Kimberley",
            "email" : "test1@test1.com",
            "password" : "Secure123",
            "pass_confirm" : "Secure123"}
        response = self.client.post("/register/", new_player)
        self.assertRedirects(response, response.url, status_code=301, target_status_code=200)

    def test_unsuccessful_registration_redirect(self):
        new_player = {
            "username" : "Kimberley",
            "email" : "test1@test1.com",
            "password" : "Secure123",
            "pass_confirm" : "Secure456"}
        response = self.client.post("/register/", new_player)
        self.assertRedirects(response, response.url, status_code=301, target_status_code=200)
