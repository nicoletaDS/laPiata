from djoser.serializers import UserCreateSerializer
from django.contrib.auth import  get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# retrieve the user model
User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id','first_name', 'last_name', 'email', 'phone', 'is_customer', 'image_profile')


class  MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserCreateSerializer(self.user).data
        for key, value in serializer.items():
            data[key] = value
        return data