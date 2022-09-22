from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework import permissions,generics
from rest_framework import viewsets
from .models import Seat,Business
from .serializers import SeatSerializer,BusinessSerializer

# Create your views here.

def index(request):
    return JsonResponse({"name":"Kyaw Soe",},safe=False)

class SeatViewSet(viewsets.ModelViewSet):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer


class BusinessViewSet(viewsets.ModelViewSet):
    queryset= Business.objects.all()
    serializer_class= BusinessSerializer

# class LeaveViewSet(viewsets.ModelViewSet):
#     """
#     This viewset automatically provides `list`, `create`, `retrieve`,
#     `update` and `destroy` actions.

#     Additionally we also provide an extra `highlight` action.
#     """
#     queryset = Leave.objects.all()
#     serializer_class = LeaveSerializer


# # Register API
# class RegisterAPI(generics.GenericAPIView):
#     serializer_class = RegisterSerializer

#     def post(self, request, *args, **kwargs):
#         serializer = self.get_serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user = serializer.save()
#         return Response({
#         "user": UserSerializer(user, context=self.get_serializer_context()).data,
#         # "token": AuthToken.objects.create(user)[1]
#         })
