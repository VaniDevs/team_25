from django.urls import path
from django.conf.urls import url

from .views import ClientList, AgencyList, ClientUpdateList, EmailClient
urlpatterns = [
    path('clients_list', ClientList.as_view()),
    path('agencies_list', AgencyList.as_view()),
    path('send_email', EmailClient.as_view()),
    url(r'^clients/(?P<pk>\d+)/$', ClientUpdateList.as_view(), name="api_clients"),
]
