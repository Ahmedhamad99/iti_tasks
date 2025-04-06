from django.urls import path

from . import views

urlpatterns=[
    path("welcome/",views.say_wlelcome,name='newapp')
]

