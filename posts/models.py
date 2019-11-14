from django.db import models

# SPORTS - One to Many -ADVERTS/Posts
class Sport(models.Model):
    sport_name = models.CharField(max_length=50, default='Basketball')

    def __str__(self):
        return f'{self.sport_name}'


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
    number_of_players_needed = models.IntegerField(null=True)
    
    #adds id (sport) to post - can only have one sport
    sport_name = models.ForeignKey(
      Sport,
      related_name='posts',#adds posts to sport simuteneously
      on_delete=models.DO_NOTHING, #if post is deleted - do not delete the sport aswell
      null=True
    )

  #CHECK WHY DOESN'T SHOW
    def __str__(self):
        return self.attention_grabber
