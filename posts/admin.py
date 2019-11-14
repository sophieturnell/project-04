from django.contrib import admin
from .models import Post, Sport, Comment

# Register your models here.
admin.site.register(Post)  #adds Post model to site
admin.site.register(Sport)
admin.site.register(Comment)
