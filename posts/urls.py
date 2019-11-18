from django.urls import path
from .views import PostListView, PostDetailView, CommentListView # SportListView, SportDetailView  #"View" used for what most other frameworks, including express apps, would use "controller"

urlpatterns = [
    path('posts', PostListView.as_view()), # handles GET for Index and POST for Create, actions effecting the ListView
    path('posts/<int:pk>/', PostDetailView.as_view()), #  GET show, PUT update, DELETE delete, routes 
    path('posts/<int:pk>/comments/', CommentListView.as_view()) # comments create method view
    # path('sports', SportListView.as_view()),
    # path('sports/<int:pk>/', SportDetailView.as_view()),
]
