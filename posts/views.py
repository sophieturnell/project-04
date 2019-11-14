# pylint: disable=no-member
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Post, Sport, Comment
from .serializers import PostSerializer, SportSerializer, CommentSerializer

# POST Index view
class PostListView(ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly, ) #for unsafe route, update, create, delete  (tuple requires","" - stops it being changed)
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# POST Show 1 View
class PostDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# SPORT
class SportListView(ListAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

class SportDetailView(RetrieveAPIView):
    queryset = Sport.objects.all()
    serializer_class = SportSerializer

# COMMENT
class CommentListView(ListAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

class CommentDetailView(RetrieveAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
