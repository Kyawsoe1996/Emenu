# Generated by Django 3.2 on 2022-09-19 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emenu_api', '0005_auto_20220919_1506'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seat',
            name='is_available',
            field=models.BooleanField(default=True),
        ),
    ]
