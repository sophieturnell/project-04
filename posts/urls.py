from django.urls import path
from .views import PostListView, PostDetailView, SportListView, SportDetailView, CommentListView, CommentDetailView

urlpatterns = [
  path('posts', PostListView.as_view()), #url for Posts Index page
  path('posts/<int:pk>/', PostDetailView.as_view()), # Post Show page
  path('sports', SportListView.as_view()),
  path('sports/<int:pk>/', SportDetailView.as_view()),
  path('comments', CommentListView.as_view()),
  path('comments/<int:pk>/', CommentDetailView.as_view())
]
