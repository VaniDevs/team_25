from rest_framework import serializers
from .models import Client, Agency

class AgencySerializer (serializers.ModelSerializer):
    class Meta:
        model = Agency
        fields = '__all__'

class AgencyHelperSerializer (serializers.ModelSerializer):
    class Meta:
        model = Agency
        fields = ('id','name')

class ClientSerializer (serializers.ModelSerializer):
    
    agency = AgencyHelperSerializer(many=False, read_only=True)

    class Meta:
        model = Client
        fields = '__all__'

class ClientUpdateSerializer (serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'

class EmailSerializer(serializers.Serializer):
    client_id = serializers.IntegerField()
