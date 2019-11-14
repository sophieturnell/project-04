from rest_framework import serializers
from .models import Post, Sport

# SPORT
class SportSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sport
        fields = ('id', 'sport_name', 'posts')

# POST
class PostSerializer(serializers.ModelSerializer):

    sport = SportSerializer()

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
                  'sport',
                )
