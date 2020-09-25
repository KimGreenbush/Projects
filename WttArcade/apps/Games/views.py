from django.shortcuts import render, redirect
from ..Arcade.models import *


def snake(request):
    if 'uuid' not in request.session:
        return redirect('/')
    context = {
        "logged_player": Player.objects.get(id=request.session['uuid'])
    }
    return render(request, 'snake.html', context)


def pacman(request):
    if 'uuid' not in request.session:
        return redirect('/')
    context = {
        "logged_player": Player.objects.get(id=request.session['uuid'])
    }
    return render(request, 'pacman.html', context)


def tetris(request):
    if 'uuid' not in request.session:
        return redirect('/')
    context = {
        "logged_player": Player.objects.get(id=request.session['uuid'])
    }
    return render(request, 'tetris.html', context)
