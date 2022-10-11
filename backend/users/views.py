from django.http import HttpResponseRedirect
from rest_framework_simplejwt.views import TokenObtainPairView
from users.serializers import MyTokenObtainPairSerializer
from users.serializers import UserCreateSerializer
from rest_framework.views import APIView
import requests
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

User = get_user_model()

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class UserActivationView(APIView):
    def get (self, request, uid, token):
        protocol = 'https://' if request.is_secure() else 'http://'
        web_url = protocol + request.get_host()
        post_url = web_url + "/api/users/activation/"
        post_data = {'uid': uid, 'token': token}
        result = requests.post(post_url, data = post_data)
        return HttpResponseRedirect(redirect_to='http://localhost:3000/conectare/')


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_profile(request):
    # get the data from the token because of this decorator, and get the user from the token
    user = request.user
    serializer = UserCreateSerializer(user, many=False)
    return Response(serializer.data)
