from django.http import Http404
from django.shortcuts import render

# Create your views here.
from django.views.generic import TemplateView
from rest_framework import generics

from atlas.apps.core.serializers import OptionsMetaData
from atlas.apps.music.models import Album
from atlas.apps.music.serializers import AlbumSerializer


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
