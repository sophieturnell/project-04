from django.urls import path
from .views import PostListView, PostDetailView

urlpatterns = [
  path('posts', PostListView.as_view()), #url for Posts Index page
  path('posts/<int:pk>/', PostDetailView.as_view()), # Post Show page
]
