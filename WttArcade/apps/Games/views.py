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
        "logged_player": Player.objects.get(id=request.session['uuid']),
        "snake_scores": Game.objects.filter(title="snake").order_by("-score")
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
    game.player.add(player)
    game.save()
    return redirect(f"/games/{game_title}/")
