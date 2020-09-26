
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.conf.urls import url
from django.views.generic.base import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    # url(r'^$', RedirectView.as_view(url='/api/', permanent=False), name='index'),
]
