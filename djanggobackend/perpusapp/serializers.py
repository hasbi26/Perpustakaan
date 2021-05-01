from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import Pelanggan, User, Buku, Kategoribuku, Peminjaman


class PelangganSerializer(serializers.ModelSerializer):

    class Meta:
        model = Pelanggan 
        fields = ('pk', 'namapelanggan', 'email', 'alamat', 'telepon', 'registrationDate')


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(
            write_only=True,
            required=True,
            help_text='Leave empty if no change needed',
            style={'input_type': 'password', 'placeholder': 'Password'}
        )

    class Meta:
        model = User 
        fields = ('pk', 'username', 'email', 'password', 'registrationDate')


    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super(UserSerializer, self).create(validated_data)


class BukuSerializer(serializers.ModelSerializer):

    class Meta:
        model = Buku 
        fields = ('pk', 'judulbuku', 'kategori', 'penerbit', 'pengarang','lokasirak', 'registrationDate')


class KategoribukuSerializer(serializers.ModelSerializer):

    class Meta:
        model = Kategoribuku 
        fields = ('pk', 'kategori', 'registrationDate')

class PeminjamanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Peminjaman 
        fields = ('pk', 'tanggalpinjam','tanggalpengembalian','id_buku','id_user','id_pelanggan', 'registrationDate')
        
