from django.urls import path
from .views import RegisterView, LoginView, ProfileView

urlpatterns = [
    path('register', RegisterView.as_view()), # sending requests to  '/register' to the register view(controller)
    path('login', LoginView.as_view()),
    path('profile', ProfileView.as_view())
]
