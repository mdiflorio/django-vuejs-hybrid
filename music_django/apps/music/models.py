from django.db import models

# Create your models here.
from django.db import models


class Musician(models.Model):
    def __str__(self):
        return "{0} {1}".format(self.first_name, self.last_name)

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    instrument = models.CharField(max_length=100)


class Album(models.Model):
    def __str__(self):
        return "{0} - {1}".format(self.name, self.release_date)

    artist = models.ForeignKey(Musician, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    release_date = models.DateField()
    num_stars = models.IntegerField(verbose_name="Number of stars")
