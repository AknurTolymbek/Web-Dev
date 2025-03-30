from django.http import JsonResponse
from django.views import View
from django.shortcuts import get_object_or_404
from django.core.serializers import serialize
import json
from .models import Product, Category

class ProductListView(View):
    def get(self, request):
        products = Product.objects.all()
        data = json.loads(serialize('json', products))
        return JsonResponse(data, safe=False)

class ProductDetailView(View):
    def get(self, request, id):
        product = get_object_or_404(Product, id=id)
        data = json.loads(serialize('json', [product]))[0]
        return JsonResponse(data)

class CategoryListView(View):
    def get(self, request):
        categories = Category.objects.all()
        data = json.loads(serialize('json', categories))
        return JsonResponse(data, safe=False)

class CategoryDetailView(View):
    def get(self, request, id):
        category = get_object_or_404(Category, id=id)
        data = json.loads(serialize('json', [category]))[0]
        return JsonResponse(data)

class CategoryProductsView(View):
    def get(self, request, id):
        category = get_object_or_404(Category, id=id)
        products = category.products.all()
        data = json.loads(serialize('json', products))
        return JsonResponse(data, safe=False)
