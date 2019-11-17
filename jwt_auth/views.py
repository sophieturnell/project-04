#pylint: disable=no-member,arguments-differ
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
from .serializers import UserSerializer
User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration Successful'})
        return Response(serializer.errors, status=422)  #if goes wrong - these errors show


class LoginView(APIView):

    def get_user(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid Credentials'})

    def post(self, request):

        email = request.data.get('email')
        password = request.data.get('password')

        user = self.get_user(email)

        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid Credentials'})

        token = jwt.encode({'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user.username}'})


class ProfileView(APIView):

    permission_classes = (IsAuthenticated, ) #requires log in (user id from token sent with the request for the profile)

    # Get USER 
    def get(self, request):
        user = User.objects.get(pk=request.user.id) # find the user by their id(primary key, pk).
        #User from request.user.id set in 'jwt/authentication.py' and is worked out by decoding the jwt token send with the request
        serialized_user = UserSerializer(user) # serialiser to turn it into JSON
        return Response(serialized_user.data) # sending that JSON data
