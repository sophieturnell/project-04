from django.contrib import admin
from .models import Post, Sport

# Register your models here.
admin.site.register(Post)  #adds Post model to site
admin.site.register(Sport)
