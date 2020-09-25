from django.urls import path
from . import views

app_name='arcade'

urlpatterns = [
    path('', views.index, name='index'),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('dashboard/', views.dashboard_redirect, name='dashboard_redirect'),
    path('dashboard/<int:player_id>/', views.dashboard, name='dashboard'),
    path('add_friend/<int:player_id>/', views.add_friend, name='add_friend'),
    path('remove_friend/<int:player_id>/', views.remove_friend, name='remove_friend'),
    path('arcade/', views.arcade, name='arcade')
]
