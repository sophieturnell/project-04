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
    comment = NestedCommentSerializer()

    # ADD A POST
    def create(self, data): # data=incoming JSON conveted to python
        sport_data = data.pop('sport_name') # storing and removing from data object
        comment_data = data.pop('comment')

        post = Post(**data) #spreads post data in and creates new entry wth surplus
        post.sport = Sport.objects.get(**sport_data) #Many to One
        post.comment = Comment.objects.get(**comment_data)
        post.save() # save to create primary key before setting a many to many relationship in the model
        return post #newly created station to be sent as the response to the client

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
