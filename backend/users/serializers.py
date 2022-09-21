from djoser.serializers import UserCreateSerializer
from django.contrib.auth import  get_user_model

# retrieve the user model
User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = ('id','first_name', 'last_name', 'name', 'email', 'phone', 'is_customer', 'image_profile')
