from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):

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
                )
