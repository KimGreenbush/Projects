from django.urls import path
from . import views

app_name='Arcade'

urlpatterns = [
    path('', views.index, name='index'),
]
