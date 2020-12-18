from django.shortcuts import render, redirect
from ..Arcade.models import *

# redirect to "arcade"
def index(request):
    return redirect("/arcade/")

# render game pages
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

# add scores (CRUD)
def add_score(request, game_title):
    score = request.POST["score"]
    player = Player.objects.get(id=request.session['uuid'])
    game = Game.objects.create(title=game_title, score=score)
    game.save()
    game.player.add(player)
    return redirect(f"/games/{game_title}/")
