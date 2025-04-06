from django.db import models
from courses.models import Course
# Create your models here.
#  Student.id_of_stud +=1
#         self.id = Student.id_of_stud
#         self.name = name
#         self.age = age
#         self.birth_date = data_birth  
#         self.address = address
#         self.grade = grade

class Student(models.Model):
    id = models.BigAutoField(primary_key=True)
    name=models.CharField(max_length=200)
    age=models.IntegerField()
    birth_date=models.DateField()
    address=models.CharField(max_length=300)
    grade=models.FloatField()
    courses = models.ManyToManyField(Course)

    def __str__(self):
        return self.name
    
