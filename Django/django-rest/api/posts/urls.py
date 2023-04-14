from django.urls import path
from . import views

urlpatterns = [
    path('', views.posts),
    path('<int:id>', views.post_item)
]