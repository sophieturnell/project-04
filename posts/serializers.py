# pylint: disable=no-member,arguments-differ
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Post, Sport, Comment
User = get_user_model()

# I am using a slightly diffrent method here than previously used with the nested serializers.
# Creating a populated serailizer at the bottom.
# populated serializers below do not inherit from 'serializers.ModelSerializer' (like the regular ones do,) but instead inherit from one we've already written.
# Similar to '.populate()' with express and mongoose for nested fields there.
# Use whenever you want the data returned to populate any nested realtions.
# like user on posts
# Removes the need to create custom create and update methods here.
# The downside to this method is that, if you look at 'posts/views.py', we cannot use the generic ListCreateViews etc. from DRF
# instead have to write our views(controllers) pretty much ourselves
# Again which method to use depends on USE CASE
# I have chosen this method here, as it makes easier to attach things like the owner of posts to them when they are created.

# populate a nested owner on a post or comment
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'profile_image', 'email')


# SPORT
class SportSerializer(serializers.ModelSerializer):

    class Meta:
        model = Sport
        fields = ('id', 'sport_name')


# COMMENTS
# populate a nested comment on a post or comment
class CommentSerializer(serializers.ModelSerializer): #if we didnt do tbhis we would just see a list of comment IDs returned on a post, instead of the full objects in a list.

    class Meta:
        model = Comment
        fields = ('id', 'comment', 'owner', 'post')

# We use this on comment population to show the owner as a serialized nested field. note how this is inherting directly from the comment serializer above, and there for has all its meta class and feilds infromation automatically added
class PopulatedCommentSerializer(CommentSerializer):

    owner = UserSerializer() # use the owner serializer on the owner field of comments


#POSTS
class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('id',
                  'attention_grabber',
                  'location_name',
                  'address',
                  'lat',
                  'lon',
                  'date',
                  'time',
                  'position',
                  'team_name',
                  'post_image',
                  'number_of_players_needed',
                  'owner',
                  'team_name',
                  'post_image',
                  'comments',
                  'sport_name'
                  )
        extra_kwargs = {'comments': {'required': False}} # this lines tell the serializer that sometimes, comments wont be there, and thats fine. This is important otherwise when we create a post. it would say we need to make comments along with it. Again this is a USE CASE idea. Maybe you have a nested field that you would want to be required on creation. This just doesn't make sense for comments. we would want to make a post, and then allow users to make comments on that post

class PopulatedPostSerializer(PostSerializer): # again same idea as with the populated comment serilaizer, it inherits from Post Serializer and gets all the meta class and fields from that

    owner = UserSerializer() # any user on the post will be seralized and nested(like .populate() in mongoose)
    comments = PopulatedCommentSerializer(many=True)
    sport_name = SportSerializer() # same with comments, but in this case, we let the serializer know there will be a list of comments to seralize not just one.
