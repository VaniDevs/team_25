from django.urls import path

from .views import ClientList, AgencyList, ClientUpdateList
urlpatterns = [
    path('clients_list', ClientList.as_view()),
    path('agencies_list', AgencyList.as_view()),
    path('clients', ClientUpdateList.as_view()),
]
