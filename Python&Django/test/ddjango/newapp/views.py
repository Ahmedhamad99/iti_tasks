from django.shortcuts import render

# Create your views here.

def say_wlelcome(request):
    return render(request,'welcome.html')