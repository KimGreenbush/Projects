from django.shortcuts import render, redirect
from .models import *
import bcrypt
from django.contrib import messages

def index(request):
    return render(request, 'index.html')

# Register/Login/Logout
def register(request):
    errors = Player.objects.register_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
            return redirect('/')
    else:
        password = request.POST['password']
        pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
        player = Player.objects.create(
            username=request.POST['username'], email=request.POST['email'], password=pw_hash)
        player.save()
        request.session['uuid'] = player.id
        return redirect('/arcade/dashboard/')

def login(request):
    errors = Player.objects.login_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
            return redirect('/')
    else:
        player = Player.objects.filter(email=request.POST['email'])
        logged_player = player[0]
        request.session['uuid'] = logged_player.id
        return redirect('/arcade/dashboard/')

def logout(request):
    request.session.flush()
    return redirect('/')
