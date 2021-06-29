from django.contrib.auth.models import User
from django.db import models


# Create your models here.


class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254, unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, models.CASCADE, null=True)

    def __str__(self):
        return f"{self.name} owner: {self.owner}"