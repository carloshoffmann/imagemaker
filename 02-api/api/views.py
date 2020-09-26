from django.shortcuts import render
from django.core.paginator import Paginator
from django.http import HttpResponse
import requests
import json

def index(request):
    template = 'index.html'
    r = requests.get('https://swapi.dev/api/')
    d = { 'data': r.json }
    return render(request, template, d)

def list(request, objtype): 
    page = request.GET.get('page', 1)
    url = 'https://swapi.dev/api/{0}/?page={1}'.format(objtype, page)
    r = requests.get(url)
    return HttpResponse(r.text, content_type="application/json")
