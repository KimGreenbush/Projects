from django.shortcuts import render, redirect
from .models import *

def snake(request):
    return render(request, 'snake.html')

def pacman(request):
    return render(request, 'pacman.html')

def tetris(request):
    return render(request, 'tetris.html')