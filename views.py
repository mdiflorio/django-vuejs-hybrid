from django.shortcuts import render

# Create your views here.
from rest_framework import generics

from atlas.apps.core.serializers import OptionsMetaData
from atlas.apps.music.models import Album
from atlas.apps.music.serializers import AlbumSerializer


class AlbumList(generics.ListCreateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    metadata_class = OptionsMetaData


class AlbumDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    metadata_class = OptionsMetaData
