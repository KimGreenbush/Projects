from django.urls import path
from . import views

app_name='games'

urlpatterns = [
    path('', views.index, name="index"),
    path('snake/', views.snake, name="snake"),
    path('pacman/', views.pacman, name="pacman"),
    path('tetris/', views.tetris, name="tetris"),
    path('<str:game_title>/add_score', views.add_score, name="add_score")
]