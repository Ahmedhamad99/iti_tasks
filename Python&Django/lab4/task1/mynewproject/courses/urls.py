from django.urls import path

from . import views

urlpatterns=[
    path("",views.courses_view,name='courses'),
     path("course/<int:id>/",views.course_detail,name='course_detail'),
     path("<int:id>",views.course_delete,name='course_delete'),
     path("update/<int:id>",views.update_course,name='update_course'),
     path("add_course/",views.add_course,name='add_course'),
]