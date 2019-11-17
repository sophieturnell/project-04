# Register our custom user model in admin site. Can create users from there.
from django.contrib import admin
from django.contrib.auth import get_user_model
User = get_user_model() #access to our custom extended user model

# Register your models here.
admin.site.register(User)
