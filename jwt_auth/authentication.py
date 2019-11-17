# pylint: disable=no-member,arguments-differ
from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied  #exceptions = errors
from django.contrib.auth import get_user_model
from django.conf import settings  #to access the secret
import jwt
User = get_user_model()

class JWTAuthentication(BasicAuthentication):  #SAME LAYOUT IN JS

    def authenticate(self, request): #checks that you are who you say you are
        header = request.headers.get('Authorization')

        if not header:  # do headers have a field called "Authorization",
            return None

        if not header.startswith('Bearer'):  #does the value start with "Bearer"
            return PermissionDenied({'message': 'Invalid Authorization Header'})

        token = header.replace('Bearer ', '')

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))   #sub is just best practice - can use any word if clearer (e.g. 2 types of user - maybe use diff words)
        except jwt.exceptions.InvalidTokenError:   #equivalent to errors in JS
            raise PermissionDenied({'message': 'Invalid Token'})
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'User not found 2'})

        return (user, token)  # stored on all routes as key "request.user", token stored on key "request.auth"
