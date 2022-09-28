from django.urls import path
from users import views
from users.views import MyTokenObtainPairView

urlpatterns=[
    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
]