from django.db import models
import re
import bcrypt


class PlayerManager(models.Manager):
    def register_validator(self, postData):
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        errors = {}
        if len(postData['username']) < 3:
            errors['username'] = "Username must be at least 3 characters."
        if not EMAIL_REGEX.match(postData['email']):
            errors['email'] = "Email not valid."
        if Player.objects.filter(email=postData['email']).exists():
            errors['email'] = "Email error."
        if len(postData['password']) < 8:
            errors['password'] = "Password must be at least 8 characters."
        if postData['password'] != postData['pass_confirm']:
            errors['pass_confirm'] = "Passwords do not match."
        return errors
    def login_validator(self, postData):
        errors = {}
        player = Player.objects.filter(email=postData['email'])
        if not player:
            errors['email'] = "Check email."
        else:
            if player:
                logged_player = player[0]
                if bcrypt.checkpw(postData['password'].encode('utf-8'), logged_player.password.encode('utf-8')) == False:
                    errors['password'] = "Password error."
        return errors

class Player(models.Model):
    username = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=100)
    friends = models.ManyToManyField('Player', related_name='friendships')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    #scores
    #games
    objects = PlayerManager()
    def __str__(self):
        return f"<{self.username} ({self.id})>"

class Game(models.Model):
    title = models.CharField(max_length=30)
    score = models.ForeignKey(Player, related_name='scores', on_delete=models.CASCADE)
    player = models.ManyToManyField(Player, related_name='games')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"<{self.title} ({self.id})>"
