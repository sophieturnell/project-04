# pylint: disable=no-member
from django.db import models
from django.contrib.auth import get_user_model # importing our user model through the get_user_model method. Again this is project specific, in this case I'vwe imported the user so I can attach it an an Owner field on a post and a comment, If you did not want/need to attach the creating user to your resource, would would not do this.
User = get_user_model() # using that get user model function.


# SPORTS - One to Many -ADVERTS/Posts
class Sport(models.Model):
    sport_name = models.CharField(max_length=50, default='Basketball')

    def __str__(self):
        return f'{self.sport_name}'


# POSTS FOR RINGERS
class Post(models.Model):
    attention_grabber = models.CharField(max_length=100, unique=True)
    location_name = models.CharField(max_length=50)
    date = models.DateField()
    time = models.TimeField()
    position = models.CharField(max_length=20)
    address = models.CharField(max_length=500)
    number_of_players_needed = models.IntegerField(null=True)

    owner = models.ForeignKey( # Attaching the owner to the model, this is makiing a one to many forgeign key realtionship to the user table. A user can have many posts but a post may only have one user. That is why the user id is stored here in the post model
        User, # the model to use to make relationship
        related_name='posts', # optional, this is the name the field will get on the corresponing model if you would like to show it. For example you may want to have a route that returns a Users profile information, including the posts they have made. That field on User, must be called 'posts' as that is what it has been set as here on the related name
        on_delete=models.CASCADE, # what to do if the relation is delete. In this case, if the user deletes their account, we want to delete all the posts associatd with thmm too
        null=True,
        blank=True
    )

    sport_name = models.ForeignKey(  #adds id (sport) to post - can only have one sport
      Sport,
      related_name='posts',#adds posts to sport simuteneously
      on_delete=models.DO_NOTHING, #if post is deleted - do not delete the sport aswell
      null=True
    )

    def __str__(self):
        return f' Post {self.id} - {self.owner} - {self.attention_grabber}'


# COMMENTS
class Comment(models.Model):
    comment = models.CharField(max_length=500)

    owner = models.ForeignKey( # One to many relationship with User, A user can have many comments, a comment can only be made by one User
        User,
        related_name='comments', # same as above model for related name
        on_delete=models.CASCADE,
        null=True, # we would delete the comment if the user deleted their account
        blank=True
    )
    post = models.ForeignKey( # One to many with Posts as well, A Post can have many comments, but a comment can only belong to one Post
        Post,
        related_name='comments',  # So we can see the comments on a post.
        on_delete=models.CASCADE, # we would delete the comment if to post was deleted
        blank=True,
        null=True
    )

    def __str__(self):
        return self.comment
