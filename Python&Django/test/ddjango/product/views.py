from django.shortcuts import render,get_object_or_404
from .models import Product
# Create your views here.


def product(request,product_id):
      prod = get_object_or_404(Product, id=product_id)
      return render(request, 'product.html', {"prod": prod})
  

def products(request):
    return render(request,'products.html',{"pro":Product.objects.all()})