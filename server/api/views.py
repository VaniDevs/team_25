# Create your views here.
from rest_framework import views, exceptions, generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from .utils import all_families, all_agencies
from .serializers import ClientSerializer, AgencySerializer, ClientUpdateSerializer

class ClientList(generics.ListCreateAPIView):

    serializer_class = ClientSerializer

    def perform_create(self, serializer):
        serializer.save(agency_id=self.request.query_params.get('id'))

    def get_queryset(self):
        request = self.request
        agency_id = request.query_params.get('id')

        if agency_id is not None:
            self.queryset = all_families(agency_id)
            return self.queryset
        else:
            raise exceptions.ParseError("invalid query params")

class AgencyList(generics.ListCreateAPIView):

    serializer_class = AgencySerializer
    queryset = all_agencies()

class ClientUpdateList(generics.UpdateAPIView):

    serializer_class = ClientUpdateSerializer
    queryset = all_agencies()
