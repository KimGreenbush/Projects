from django.urls import path
from . import views

app_name='games'

urlpatterns = [
    path('snake/', views.snake, name="snake"),
    path('pacman/', views.pacman, name="pacman"),
    path('tetris/', views.tetris, name="tetris")
]