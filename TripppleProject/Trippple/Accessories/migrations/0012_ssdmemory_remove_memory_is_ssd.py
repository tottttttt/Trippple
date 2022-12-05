# Generated by Django 4.1.3 on 2022-12-03 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Accessories', '0011_memory_speedmem'),
    ]

    operations = [
        migrations.CreateModel(
            name='SSDMemory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('manufacturer', models.CharField(max_length=150, verbose_name='Производитель')),
                ('MEMmodel', models.CharField(max_length=150, verbose_name='Модель')),
                ('countMEM', models.IntegerField(verbose_name='Количество памяти')),
                ('speedMEMRead', models.IntegerField(default=None, verbose_name='Скорость вращения шпинделя')),
                ('speedMEMWrite', models.IntegerField(default=None, verbose_name='Скорость вращения шпинделя')),
            ],
            options={
                'verbose_name': 'SSD Память',
                'verbose_name_plural': 'SSD Памяти',
                'ordering': ['MEMmodel'],
            },
        ),
        migrations.RemoveField(
            model_name='memory',
            name='is_SSD',
        ),
    ]