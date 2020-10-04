from django.urls import path

from . import views

urlpatterns = [
    path('albums/create', views.AlbumCreate.as_view()),
    path('albums/update/<int:pk>', views.AlbumUpdate.as_view()),
    path('api/albums/', views.AlbumList.as_view()),
    path('api/albums/<int:pk>', views.AlbumDetail.as_view()),
]
