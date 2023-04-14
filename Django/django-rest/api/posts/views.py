import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response

URL = 'https://jsonplaceholder.typicode.com/posts/'

@api_view(['GET', 'POST'])
def posts(request):
  match request.method:
    case 'GET':
      return Response(requests.get(URL).json())
    case 'POST':
      return Response(requests.post(URL, data=request.data).json())

@api_view(['GET', 'PUT', 'DELETE'])
def post_item(request, id):
  match request.method:
    case 'GET':
      return Response(requests.get(f"{URL}{id}").json())
    case 'PUT':
      pass
    case 'DELETE':
      pass
