from rest_framework.test import APIClient

client = APIClient()
client.get('/api/categories/')
