from django.urls import path
from . import views

app_name='Arcade'

urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('dashboard/<int:player_id>/', views.dashboard, name='dashboard'),
]
