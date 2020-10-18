from django.http import Http404
from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from rest_framework import generics

from music_django.apps.music.models import Album
from music_django.apps.music.serializers import AlbumSerializer, OptionsMetaData


class AlbumCreate(TemplateView):
    template_name = "album_form.html"


class AlbumUpdate(TemplateView):
    template_name = "album_form.html"

    def get(self, request, *args, **kwargs):
        album_id = self.kwargs.get("pk")

        try:
            Album.objects.get(id=album_id)
        except Album.DoesNotExist:
            raise Http404()

        context = {"album_id": album_id}
        return self.render_to_response(context)


class AlbumList(generics.ListCreateAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    metadata_class = OptionsMetaData


class AlbumDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Album.objects.all()
    serializer_class = AlbumSerializer
    metadata_class = OptionsMetaData
