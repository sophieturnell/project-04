# pylint: disable=no-member,arguments-differ
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import PermissionDenied  #exceptions = errors
from django.contrib.auth import get_user_model
from django.conf import settings  #to access the secret
import jwt
User = get_user_model()

class JWTAuthentication(BaseAuthentication):

    def authenticate(self, request):
        header = request.headers.get('Authorization') # try to get a authorizaton key from the incoming request headers

        if not header: # If its not there, we return none. This allows users to still interact with unportected routes. In this app at least, that is only register and login routes. again this is USE CASE SPECIFIC
            return None
        
        print(1)

        if header.startswith('Basic'): # Add this line in
            return None
        
        print(2)

        if not header.startswith('Bearer'): # if the authorization header is there, but does not start wih the word Bearer
            raise PermissionDenied({'message': 'Invalid Authorization Header'})  # we send a unauthorized message back and stop the request here
        
        print(3)

        token = header.replace('Bearer ', '') # if it was there we attempt to take just the token from the header

        try: # using pythons try catch syntax to attempt to decode the token and see if its valid
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256']) # we try to decode here
            user = User.objects.get(pk=payload.get('sub')) # and if it works we try to find the user who supplied by the user id we just decoded from the token
        except jwt.exceptions.InvalidTokenError: # but if we couldnt decode it, there was error and we send back this invalid token message
            raise PermissionDenied({'message': 'Invalid Token'})
        except User.DoesNotExist: # or poteniailly we couldnt find a user and send back this error message
            raise PermissionDenied({'message': 'User not found'})

        return (user, token) # if all was good we return our found authenticated user, and the token used, in a tuple. This then attaches itself to the incoming request object. The user will be found as 'request.user' and the token on 'request.auth'. This is then used extensiviely in this app to attach users and owners to resources like comments and posts.
