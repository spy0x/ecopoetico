# Generated by Django 4.2.2 on 2023-06-08 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('betopoem', '0003_poem_similars'),
    ]

    operations = [
        migrations.AddField(
            model_name='poem',
            name='detail_url',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
