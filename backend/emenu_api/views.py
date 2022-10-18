from getopt import gnu_getopt
from urllib import request
from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from rest_framework.response import Response
from rest_framework import permissions,generics
from rest_framework import viewsets
from .models import Category, Item, Seat,Business
from .serializers import (
                SeatSerializer,
                BusinessSerializer,
                CategorySerializer,
                ItemSerializer,
                CategoryImageUploadableSerializer
                )
from rest_framework.decorators import action
from rest_framework import serializers
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404



# Create your views here.
def ok(request):
    return JsonResponse({"hehe":"OK"})

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
    #each business categories list
    @action(detail=True)
    def category(self,request,pk=None):
        business = self.get_object()
        categories = business.categories.all()
        serialzier = CategorySerializer(categories,many=True)
        return Response(serialzier.data,status=status.HTTP_200_OK)

        
        
class CategoryViewSet(viewsets.ModelViewSet):
    queryset=Category.objects.all()       
    serializer_class = CategorySerializer


    def get_serializer_class(self):
        print(self.action,"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa")
        if self.action == 'list':
            
            return CategorySerializer
        return CategoryImageUploadableSerializer
    

    def perform_create(self, serializer):
        print(self,"######",serializer)
        print(self.request.data,"#########")
        business_id = self.request.data.get('business_id',None)
        print(business_id,'###3')
        if business_id:
            try:
                business_object= get_object_or_404(Business,pk=int(business_id))
                return serializer.save(business_id=business_object)
            except Exception as e:
                raise serializers.ValidationError({"error":"The provide business is not in the database"})
        else:
            raise serializers.ValidationError({"error":"Provide Business Id for creating category "})
    @action(detail=True,methods=['get'])
    def items(self,request,pk=None):
        category = self.get_object()
        items =category.items.all()
        
        serializer = ItemSerializer(items,many=True)
        
        return Response(serializer.data,status=status.HTTP_200_OK)

        

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ItemListView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer




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
