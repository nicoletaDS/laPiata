from django.urls import path, re_path
from users import views
from users.views import MyTokenObtainPairView, UserActivationView
from users.views import get_user_profile

urlpatterns=[
    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    re_path(r'users/activate/(?P<uid>[\w-]+)/(?P<token>[\w-]+)/$', UserActivationView.as_view()),
    path('profile/', views.get_user_profile, name='profil'),
]