# Generated by Django 4.1.3 on 2022-11-26 21:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Accessories', '0006_chipset_motherboard'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='motherboard',
            name='typememory_id',
        ),
        migrations.AddField(
            model_name='motherboard',
            name='RAMtype',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, to='Accessories.memorytypes', verbose_name='ID типа памяти'),
            preserve_default=False,
        ),
    ]
