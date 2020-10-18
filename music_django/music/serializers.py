from rest_framework import serializers

from atlas.apps.music.models import Album


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ['artist', 'name', 'release_date', 'num_stars']