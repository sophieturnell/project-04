# import os
# from django.views.generic import View
# from django.http import HttpResponse, HttpResponseNotFound

# # SENDS STATIC HTML FILE AND JS FILE
# class Home(View):

#     def get(self, _request):  #prefix with underscore to pass something you don't want to use
#         with open(os.path.join(os.path.dirname(__file__), 'dist', 'index.html')) as file:
#             return HttpResponse(file.read())

# #SENDS IMAGES
# class Assets(View):

#     def get(self, _request, filename):
#         path = os.path.join(os.path.dirname(__file__), 'dist', filename)

#         if os.path.isfile(path):
#             with open(path, 'rb') as file:
#                 return HttpResponse(file.read())  #if is a file - read and send it back
#         return HttpResponseNotFound



import os
from django.views.generic import View
from django.http import HttpResponse, HttpResponseNotFound

class Home(View):

    def get(self, _request):
        with open(os.path.join(os.path.dirname(__file__), 'dist', 'index.html')) as file:
            return HttpResponse(file.read())


class Assets(View):

    def get(self, _request, filename):
        path = os.path.join(os.path.dirname(__file__), 'dist', filename)
        if os.path.isfile(path):
            with open(path, 'rb') as file:
                return HttpResponse(file.read())
        else:
            return HttpResponseNotFound()
