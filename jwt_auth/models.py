from django.db import models
from django.contrib.auth.models import AbstractUser # extends default user model

#ADD FIELDS TO A USER MODEL
class User(AbstractUser):  #base built in user

    email = models.CharField(max_length=50, unique=True) # overwriting the already exisiting email method, to make it required and need to be unique
    profile_image = models.CharField(max_length=500, blank=True)
