from .models import Client, Agency

def all_families(agency_id):
    return Client.objects.filter(agency_id=agency_id)

def all_agencies():
    return Agency.objects.all()

