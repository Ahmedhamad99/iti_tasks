from django.db import models
from datetime import datetime
# Create your models here.
class Product(models.Model):

    categ=[
        ("phones","phones")
    ]
    name = models.CharField(max_length=50)
    content = models.TextField(max_length=100)
    price = models.DecimalField(max_digits=6,decimal_places=2)
    image = models.ImageField(upload_to='media/%y/%m/$d',)
    active = models.BooleanField(default=True)
    category = models.CharField(max_length=30,null=True,blank=True,choices=categ)
    def __str__(self):
        return self.name
    class Meta:
        ordering=['-name']


class Car(models.Model):

    
    name=models.CharField(max_length=50)
    date = models.DateField(default=datetime.now)
    time = models.DateTimeField(null=True,default=datetime.now)
    def __str__(self):
        return self.name




class Female(models.Model):
    name=models.CharField( max_length=70,null=True)

    def __str__(self):
        return self.name


class Male(models.Model):
    name=models.CharField(max_length=70,null=True)

    girls = models.OneToOneField(Female,on_delete=models.CASCADE)