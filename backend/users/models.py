from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):

    def create_user(self, email, first_name, last_name, phone, is_customer,image_profile='image_profile.png', password=None):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        user = self.model(email=email,
                          first_name=first_name,
                          last_name=last_name,
                          phone=phone,
                          is_customer=is_customer,
                          image_profile=image_profile
                          )

        user.set_password(password)
        
        user.save()
        if user.is_customer:
            customer = Customer(user=user)
            customer.save()
        else:
            supplier = Supplier(user=user)
            supplier.save()

        return user

    def create_superuser(self, email, first_name, last_name, phone, is_customer,image_profile, password=None):
        """
        Creates and saves a  superuser with a given email, first name, last name and password.
        """
        user = self.create_user(
            email,
            first_name,
            last_name,
            phone,
            is_customer,
            image_profile,
            password
        )

        user.is_superuser = True
        user.is_staff = True

        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    phone = models.CharField(max_length=10)
    is_customer = models.BooleanField(default=False)
    image_profile = models.ImageField()

    objects = UserAccountManager()

    # this is used for the login, you will use email to login
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'password', 'phone', 'is_customer']

    def get_full_name(self):
        return self.first_name + ' ' + self.last_name

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email


class Supplier(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)


class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    
