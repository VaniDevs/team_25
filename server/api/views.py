# Create your views here.
from rest_framework import views, exceptions, generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from .utils import all_families, all_agencies, fetch_families
from .serializers import ClientSerializer, AgencySerializer, ClientUpdateSerializer, EmailSerializer
from django.core.mail import send_mail
from django.conf import settings

class ClientList(generics.ListCreateAPIView):

    serializer_class = ClientSerializer

    def perform_create(self, serializer):
        serializer.save(agency_id=self.request.query_params.get('agency_id'))

    def get_queryset(self):
        request = self.request
        agency_id = request.query_params.get('agency_id')

        if agency_id is not None:
            self.queryset = all_families(agency_id)
            return self.queryset
        else:
            raise exceptions.ParseError("invalid query params")

class EmailClient(generics.CreateAPIView):

    serializer_class = EmailSerializer

    def perform_create(self, serializer):
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ['runqing.z@gmail.com',]
        send_mail('Do not reply',
                  'Here is the message.',
                  email_from,
                  recipient_list,
                  fail_silently=False)
        return Response(status=status.HTTP_201_CREATED)


class AgencyList(generics.ListCreateAPIView):

    serializer_class = AgencySerializer
    queryset = all_agencies()

class ClientUpdateList(generics.RetrieveUpdateAPIView):

    serializer_class = ClientUpdateSerializer
    queryset = fetch_families()
