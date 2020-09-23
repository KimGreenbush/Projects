from django.shortcuts import render, redirect
from .models import *
import bcrypt
from django.contrib import messages

#render
def index(request):
    return render(request, 'index.html')