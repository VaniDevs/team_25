# Create your views here.
from rest_framework import views, exceptions, generics
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from .utils import all_families, all_agencies, fetch_families, get_client, construct_content
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

        recipient_client = get_client(self.request.data.get('client_id'))

        name = recipient_client.name
        item_details = construct_content(recipient_client.details)
        email = recipient_client.email

        recipient_list = [email,]

        content = f"Hi {name},\nYou request of the following item: " + item_details + \
                "is approved by babygoround, Please navigate to the following link to make an appointment"

        send_mail('Do not reply',
                  content,
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
