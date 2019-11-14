from django.db import models

# SPORTS - One to Many -ADVERTS/Posts
# class Sport(models.Model):
    


# ADVERTS FOR RINGERS
class Post(models.Model):
    attention_grabber = models.CharField(max_length=100, unique=True)
    location_name = models.CharField(max_length=50)
    date = models.DateField()
    time = models.TimeField()
    position = models.CharField(max_length=20)
    lat = models.FloatField()
    lon = models.FloatField()
    address = models.CharField(max_length=500)

#CHECK WHY DOESN'T SHOW
def __str__(self):
    return self.attention_grabber
