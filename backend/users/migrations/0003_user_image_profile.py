# Generated by Django 4.1.1 on 2022-09-21 07:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_customer_supplier_user_is_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='image_profile',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
