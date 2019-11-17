# pylint: disable=no-member
from rest_framework.response import Response # response function from DRF- to send JSON responses
from rest_framework.views import APIView # more work but more control over the functionality
from rest_framework.permissions import IsAuthenticated
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_204_NO_CONTENT # custom response status codes from django
from .models import Post
from .serializers import PopulatedPostSerializer, PostSerializer, CommentSerializer


# POSTS - Index - get, post
class PostListView(APIView): #url='/posts'

    permission_classes = (IsAuthenticated, ) #requires a token

    # Get all POSTS
    def get(self, _request):
        posts = Post.objects.all() # get all the posts from the DB
        serialized_posts = PopulatedPostSerializer(posts, many=True) # serialise posts into JSON, 
        return Response(serialized_posts.data) # send as response to the client

    # Create a new POST
    def post(self, request):
        request.data['owner'] = request.user.id # attach the owner id to the post (from auth class)
        post = PostSerializer(data=request.data) # we pass the data we have been sent with the request
        # (the json body of the POST request to '/posts', which should contain a valid object with ALL the correct fields)
        if post.is_valid():
            post.save() # If valid- save the post to DB
            return Response(post.data, status=HTTP_201_CREATED) # returns newly created post in the response to client, the data object of the post is the JSON data
        return Response(post.errors, status=HTTP_422_UNPROCESSABLE_ENTITY) # if post is not valid, return object showing the errors/missing fields with a 422 status code


# POSTS - Detail/Show
class PostDetailView(APIView): # url='posts/id'

    permission_classes = (IsAuthenticated, )

    # Get POST
    def get(self, _request, pk):
        post = Post.objects.get(pk=pk) # find post via primary key, (passed from the url in the request)
        serialized_post = PopulatedPostSerializer(post)
        return Response(serialized_post.data)

    # Need to add object level check to prevent updating or deleting someone elses post.
    # I'll add this shortly, but will work in a very similar method to express

    # Update POST
    def put(self, request, pk):
        request.data['owner'] = request.user.id # since all info must be present for a put request, attach user as owner
        post = Post.objects.get(pk=pk) # find post by its primary key
        updated_post = PostSerializer(post, data=request.data) # merges & validates changes
        if updated_post.is_valid(): # follows the rules of the model for what is/isnt required to be valid
            updated_post.save() 
            return Response(updated_post.data)
        return Response(updated_post.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

    # Delete POST
    def delete(self, _request, pk):
        post = Post.objects.get(pk=pk) # find post to delete
        post.delete()
        return Response(status=HTTP_204_NO_CONTENT) # send "204 no content" response to the client to show it has been deleted


# COMMENTS - Index
class CommentListView(APIView): # url='posts/:id/comments'

    permission_classes = (IsAuthenticated, )

    # Create new COMMENT
    def post(self, request, pk):
        request.data['owner'] = request.user.id # attach the current user from the token, to the comment
        request.data['post'] = pk # attach post id from the url to comment
        comment = CommentSerializer(data=request.data) # seralize the comment
        if comment.is_valid():
            comment.save()
            post = Post.objects.get(pk=pk) # find the post associated with the comment
            serialized_post = PopulatedPostSerializer(post) # serialise that post
            return Response(serialized_post.data) # send back the post with the new comment attached
        return Response(comment.errors, status=HTTP_422_UNPROCESSABLE_ENTITY) # return any errors from the comment if it wasn't valid

# # SPORTS
# class SportListView(APIView):

#     # Get all SPORTS
#     def get(self, _request):
#         posts = Sport.objects.all()
#         serialized_sports = PopulatedSportSerializer(sports, many=True)
#         return Response(serialized_posts.data)
