from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from rest_framework.response import Response
from rest_framework import permissions,generics
from rest_framework import viewsets
from .models import Seat,Business
from .serializers import SeatSerializer,BusinessSerializer
from rest_framework.decorators import action
from rest_framework import serializers
from rest_framework import status
from rest_framework.response import Response



# Create your views here.

def index(request):
    return JsonResponse({"name":"Kyaw Soe",},safe=False)

class SeatViewSet(viewsets.ModelViewSet):
    queryset = Seat.objects.all()
    serializer_class = SeatSerializer




class BusinessViewSet(viewsets.ModelViewSet):
    queryset= Business.objects.all()
    serializer_class= BusinessSerializer

    @action(detail=True,methods=['post'])
    def add_seats(self,request,pk=None):
        business = self.get_object()
        print(request.data)
        serializer = SeatSerializer(data=request.data)
        print(serializer,"#####")
        if serializer.is_valid():
            # serializer = serializer.save(commit=False)
            serializer.save(business_id=business)
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    @action(detail=True,methods=['get'])
    def seats(self,request,pk=None):
        business = self.get_object()
        seats = business.seats.all()
        serialzier = SeatSerializer(seats,many=True)
        return Response(serialzier.data,status=status.HTTP_200_OK)
    

    @action(detail=True,methods=['delete'])
    def remove_seats(self,request,pk=None):
        business = self.get_object()
        print(business.seats.all(),"ALL SEATS")
        
        serializer = SeatSerializer(data=request.data)
        print(serializer,"#####")
        content = {'remove': 'Seaat Removed'}
        return Response(content,status=status.HTTP_204_NO_CONTENT)


        # if serializer.is_valid():
        #     # serializer = serializer.save(commit=False)
        #     serializer.save(business_id=business)
            
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
    

        
        # raise serializers.ValidationError({'error':"Something went wrong.. It may be post id"})
        
    # def get_serializer_context(self):
    #     context = super().get_serializer_context()
        
    #     if self.action == 'create':
    #         print("XD")
    #         print(context)

    #     # if self.action == 'list':
    #     #     context['exclude_fields'] = ['parts']
    #     return context

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
