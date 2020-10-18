from rest_framework import serializers
from django.utils.encoding import force_text
from rest_framework.metadata import SimpleMetadata
from rest_framework.relations import RelatedField, ManyRelatedField

from music_django.apps.music.models import Album


class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ['artist', 'name', 'release_date', 'num_stars']


class OptionsMetaData(SimpleMetadata):
    def get_field_info(self, field):
        field_info = super(OptionsMetaData, self).get_field_info(field)
        if isinstance(field, (RelatedField, ManyRelatedField)):
            field_info["choices"] = [
                {
                    "value": choice_value,
                    "display_name": force_text(choice_name, strings_only=True),
                }
                for choice_value, choice_name in field.get_choices().items()
            ]
        return field_info
