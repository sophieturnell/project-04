# pylint: disable=no-member,arguments-differ
from rest_framework import serializers
from .models import Post, Sport, Comment

# NESTED POST
class NestedPostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('id',
                  'attention_grabber',
                  'location_name',
                  'date',
                  'time',
                  'position',
                  'lat',
                  'lon',
                  'address',
                  'number_of_players_needed',)

# NESTED SPORT
class NestedSportSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sport
        fields = ('id', 'sport_name')

# NESTED COMMENT
class NestedCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ('id', 'comment')

# COMMENT
class CommentSerializer(serializers.ModelSerializer):

    posts = NestedPostSerializer(many=True)

    class Meta:
        model = Comment
        fields = ('id', 'comment', 'posts')

# SPORT
class SportSerializer(serializers.ModelSerializer):

    posts = NestedPostSerializer(many=True)

    class Meta:
        model = Sport
        fields = ('id', 'sport_name', 'posts')

# POST
class PostSerializer(serializers.ModelSerializer):

    sport_name = NestedSportSerializer()
    comment = NestedCommentSerializer(many=True, required=False)  #because you should not be able to edit comments here the field shhould be required and allows many comments

    # ADD A POST
    def create(self, data): # data=incoming JSON conveted to python
        sport_data = data.pop('sport_name') # storing and removing from data object

        post = Post(**data) #spreads post data in and creates new entry wth surplus
        post.sport = Sport.objects.get(**sport_data) #Many to Onee
        post.save() # save to create primary key before setting a many to many relationship in the model
        return post #newly created station to be sent as the response to the client

    # UPDATE A POST
    def update(self, post, data): #post=before, data=after
        sport_data = data.pop('sport_name') # removes old data from object
        # the comments are not included in the update method because you should not be able to edit comments here



        # checking to see if each line neeeds to be updated
        post.attention_grabber = data.get('attention_grabber', post.attention_grabber)
        post.location_name = data.get('location_name', post.location_name)
        post.date = data.get('date', post.date)
        post.time = data.get('time', post.time)
        post.position = data.get('position', post.position)
        post.lat = data.get('lat', post.lat)
        post.lon = data.get('lon', post.lon)
        post.address = data.get('address', post.address)
        post.number_of_players_needed = data.get('number_of_players_needed', post.number_of_players_needed)

        post.sport = Sport.objects.get(**sport_data) #Many to One#
        # the comments are not included in the update method because you should not be able to edit comments here

        post.save()
        return post




    class Meta: #register fields
        model = Post
        fields = ('id',
                  'attention_grabber',
                  'location_name',
                  'date',
                  'time',
                  'position',
                  'lat',
                  'lon',
                  'address',
                  'number_of_players_needed',
                  'sport_name',
                  'comment',
                )
