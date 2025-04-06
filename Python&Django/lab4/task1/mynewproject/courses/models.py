from django.db import models


#         self.instructor = instructor
#         self.duration = duration  
#         self.price = price  




class Course(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=150)
    instructor=models.CharField(max_length=250)
    duration=models.CharField(max_length=200)
    price=models.IntegerField()

    def __str__(self):
        return self.name