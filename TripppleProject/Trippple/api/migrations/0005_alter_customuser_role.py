# Generated by Django 4.1.2 on 2022-11-01 09:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_customuser_alter_bucket_user_id_delete_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='role',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.role', verbose_name='Роль'),
        ),
    ]