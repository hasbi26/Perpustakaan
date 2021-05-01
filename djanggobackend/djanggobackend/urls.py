from django.contrib import admin
from django.urls import path, re_path
from perpusapp import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^api/pelanggan/$', views.pelanggan_list),
    re_path(r'^api/pelanggan/([0-9])$', views.pelanggan_detail),
    re_path(r'^api/user/$', views.user_list),
    re_path(r'^api/user/([0-9])$', views.user_detail),
    re_path(r'^api/buku/$', views.buku_list),
    re_path(r'^api/buku/([0-9])$', views.buku_detail),
    re_path(r'^api/kategoribuku/$', views.kategoribuku_list),
    re_path(r'^api/kategoribuku/([0-9])$', views.kategoribuku_detail),
    re_path(r'^api/peminjaman/$', views.peminjaman_list),
    re_path(r'^api/peminjaman/([0-9])$', views.peminjaman_detail),
]
