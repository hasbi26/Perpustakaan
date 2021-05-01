from django.shortcuts import render
# Create your views here.

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# from .models import Pelanggan
from .serializers import *


#pelanggan api
@api_view(['GET', 'POST'])
def pelanggan_list(request):
    if request.method == 'GET':
        data = Pelanggan.objects.all()

        serializer = PelangganSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PelangganSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def pelanggan_detail(request, pk):
    try:
        pelanggan = Pelanggan.objects.get(pk=pk)
    except Pelanggan.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PelangganSerializer(pelanggan, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        pelanggan.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#user api
@api_view(['GET', 'POST'])
def user_list(request):
    if request.method == 'GET':
        data = User.objects.all()

        serializer = UserSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def user_detail(request, pk):
    try:
        user = User.objects.get(pk=pk)
    except User.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#buku api
@api_view(['GET', 'POST'])
def buku_list(request):
    if request.method == 'GET':
        data = Buku.objects.all()

        serializer = BukuSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = BukuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def buku_detail(request, pk):
    try:
        buku = Buku.objects.get(pk=pk)
    except Buku.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = BukuSerializer(buku, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        buku.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#kategoribuku api
@api_view(['GET', 'POST'])
def kategoribuku_list(request):
    if request.method == 'GET':
        data = Kategoribuku.objects.all()

        serializer = KategoribukuSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = KategoribukuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def kategoribuku_detail(request, pk):
    try:
        kategoribuku = Kategoribuku.objects.get(pk=pk)
    except Kategoribuku.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = KategoribukuSerializer(kategoribuku, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        kategoribuku.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

#peminjaman api
@api_view(['GET', 'POST'])
def peminjaman_list(request):
    if request.method == 'GET':
        data = Peminjaman.objects.all()

        serializer = PeminjamanSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PeminjamanSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def peminjaman_detail(request, pk):
    try:
        peminjaman = Peminjaman.objects.get(pk=pk)
    except Peminjaman.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = PeminjamanSerializer(peminjaman, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        peminjaman.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)