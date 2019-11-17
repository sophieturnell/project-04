#pylint: disable = no-member, arguments-differ
#checks if password matches saved pasword and details are correct
from rest_framework import serializers
from django.contrib.auth import get_user_model
import django.contrib.auth.password_validation as validations
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
from django.apps import apps
User = get_user_model()
Post = apps.get_model('posts', 'Post')

# Allows user profile route to return User object and users created posts
class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ('id', 'attention_grabber')

# converts our user objects to and from JSON 
# check pasword and confirmation match when a User tries to sign up
class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)  #make sure never avail elsware in the app
    password_confirmation = serializers.CharField(write_only=True)
    posts = PostSerializer(many=True, required=False)

    def validate(self, data):

        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise ValidationError({'password_confirmation': 'does not match'})

        # requires trickier password etc.
        try:
            validations.validate_password(password=password)
        except ValidationError as err:
            raise serializers.ValidationError({'password': err.messages})

        # Hash password
        data['password'] = make_password(password)
        return data

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'password_confirmation', 'profile_image', 'posts')
      