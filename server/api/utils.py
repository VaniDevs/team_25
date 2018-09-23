from .models import Client, Agency

def all_families(agency_id):
    return Client.objects.filter(agency_id=agency_id)

def fetch_families():
    return Client.objects.all()

def get_client(client_id):
    return Client.objects.filter(id=client_id).first()

def all_agencies():
    return Agency.objects.all()

def construct_content(details):
    content = ''
    for item in details:
        content += f"{item} "

    return content

