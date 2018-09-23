from django.db import models
from rest_framework import exceptions, generics
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import AbstractUser
from django.conf import settings

# Create your models here.
class Agency(models.Model):
    name=models.CharField(max_length = 100, blank=False)
    address=models.CharField(max_length = 100, blank=False)
    phone=models.IntegerField()
    email=models.CharField(max_length = 100, blank=False)

class Client(models.Model):
    name=models.CharField(max_length = 100, blank=False)
    date_of_birth=models.DateField()
    baby_date_of_birth=models.DateField()
    phone=models.IntegerField()
    email=models.CharField(max_length = 100, blank=False)
    details=ArrayField(models.CharField(max_length=10, blank=False), size=10)
    state=models.CharField(max_length = 100, blank=False)
    agency = models.ForeignKey(Agency, on_delete=models.CASCADE)

    class Meta:
        unique_together = (("name", "date_of_birth", "baby_date_of_birth"),)

