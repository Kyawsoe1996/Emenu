from asyncore import read
from dataclasses import fields
from multiprocessing import managers
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueTogetherValidator
from .models import Category, Item, Seat,Business
from django.http import JsonResponse

class SeatSerializer(serializers.ModelSerializer):
    class Meta:
        model=Seat
        fields = ('id','seat_no','is_available','seat_fitting')


class BusinessSerializer(serializers.ModelSerializer):
    seats = SeatSerializer(many=True,read_only=True)
    class Meta:
        model = Business
        fields =('id','name','location','phone','website_url','wifi','image','seats')
       

    
    def create(self, validated_data):
        return super().create(validated_data)

class CategorySerializer(serializers.ModelSerializer):
    image = serializers.URLField(source="get_file_url")
    
    business_name = serializers.ReadOnlyField(source='business_id.name')
    class Meta:
        model = Category
        fields= ('id','name','image','business_name')
        
class CategoryImageUploadableSerializer(serializers.ModelSerializer):
    
    business_name = serializers.ReadOnlyField(source='business_id.name')
    class Meta:
        model = Category
        fields= ('id','name','image','business_name')
    


class ItemSerializer(serializers.ModelSerializer):
    image = serializers.URLField(source="get_file_url")
    category_id = serializers.ReadOnlyField(source='category_id.name')
    class Meta:
        model = Item
        fields = ('id','name','price','recipes','image','category_id')









# Register Serializer
# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'username', 'email', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

    
#     def create(self, validated_data):
#         user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

#         return user

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         fields = ['id','username','email']
#         model = User


# class LeaveSerializer(serializers.ModelSerializer):
#     user = UserSerializer(read_only=True)
#     class Meta:
#         fields = ['id','user','description','leave_type','from_date','to_date','duration']
#         model = Leave
#         validators = [
#             UniqueTogetherValidator(
#                 queryset=Leave.objects.all(),
#                 fields=['from_date','to_date']
#             )
#         ]
    

#     def create(self,validated_data):
#         user_object = User.objects.first()
#         # user_object = self.context['request'].user
#         # validated_data = validated_data.update({'user':user_object.id})
#         description = validated_data.get('description')
#         leave_type = validated_data.get('leave_type')
#         from_date =  validated_data.get('from_date')
#         to_date = validated_data.get('to_date')
#         duration = validated_data.get('duration')
#         leave_data = Leave.objects.create(user=user_object,description=description,leave_type=leave_type,from_date=from_date,to_date=to_date,duration=duration)
        
#         return leave_data   

    







