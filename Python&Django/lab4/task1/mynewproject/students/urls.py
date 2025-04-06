from  django.urls import path

from . import views

urlpatterns = [
    path("",views.students_view,name='students'),
    path("student/<int:id>/",views.student_detail,name='student_detail'),
    path("<int:id>",views.student_delete,name='student_delete'),
    path('student/add/',views.add_student,name="add_student")
]
