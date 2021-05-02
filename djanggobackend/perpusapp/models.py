from django.db import models

class Pelanggan(models.Model):
    namapelanggan = models.CharField("Nama Pelanggan", max_length=240)
    email = models.EmailField()
    alamat = models.CharField("Alamat", max_length=240)
    telepon = models.CharField("Telepon",max_length=20)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.nama

class Kategoribuku(models.Model):
    kategori = models.CharField("kategori", max_length=240)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.kategori


class Buku(models.Model):
    judulbuku = models.CharField("Judul Buku", max_length=240)
    kategori = models.CharField("Kategori", max_length=240)
    penerbit = models.CharField("Penerbit", max_length=240)
    pengarang = models.CharField("Pengarang", max_length=240)
    lokasirak = models.CharField("Lokasi Rak", max_length=240)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.judulBuku


class User(models.Model):
    username = models.CharField("User Name", max_length=240)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    registrationDate = models.DateField("Registration Date", auto_now_add=True)
    
    def __str__(self):
        return self.username

class Peminjaman(models.Model):
    tanggalpinjam = models.DateField("tanggalpinjam")
    tanggalpengembalian = models.DateField("tanggalpengembalian")
    id_buku = models.IntegerField("id_buku")
    id_user = models.IntegerField("id_user")
    id_pelanggan = models.IntegerField("id_pelanggan")
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self):
        return self.judulBuku