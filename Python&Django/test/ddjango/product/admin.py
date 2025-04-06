from django.contrib import admin
from .models import Product,Car,Female,Male
# Register your models here.

admin.site.register(Product)

admin.site.register(Car)


admin.site.register(Female)
admin.site.register(Male)