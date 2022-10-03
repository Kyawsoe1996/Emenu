from django.db import models
from .image_path_gen_utility import BusinessImageGenerator,ItemImageGenerator,CategoryImageGenerator

business_image_generator =BusinessImageGenerator()
item_image_generator = ItemImageGenerator()
category_image_generator = CategoryImageGenerator()
from django.conf import settings

from urllib.parse import urljoin


class Business(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to=business_image_generator,blank=True,null=True)
    location= models.CharField(max_length=200)
    phone = models.IntegerField()
    website_url = models.CharField(max_length=200)
    wifi = models.CharField(max_length=50)

    def get_all_menu_lists(self):
        return self.categories.all()

    



    class Meta:
        pass
    def __str__(self):
        return self.name


class Seat(models.Model):
    seat_no = models.CharField(max_length=100)
    business_id = models.ForeignKey(Business,related_name="seats",on_delete=models.CASCADE,blank=True,null=True)
    is_available = models.BooleanField(default=True)
    seat_fitting = models.IntegerField()


    class Meta:
        pass
    def __str__(self):
        return f'{self.seat_no}'
        # return f'{self.business_id.name}- {self.seat_no}'

class Category(models.Model):
    name = models.CharField(max_length=200)
    business_id = models.ForeignKey(Business,related_name="categories",on_delete=models.CASCADE,blank=True,null=True)
    image = models.ImageField(upload_to=category_image_generator,blank=True,null=True)

    class Meta:
        pass
    def __str__(self):
        return f'{self.name}'
    #category api mr image url link ma paw lot
    #  {
    #     "id": 5,
    #     "name": "Dessert",
    #     "image": "http://localhost:8000/media/category/NPT/images/Dessert.jpg",
    #     "business_name": "NPT"
    # },
    ###########LIKE THIS####################
    #  {
    #     "id": 5,
    #     "name": "Dessert",
    #     "image": "media/category/NPT/images/Dessert.jpg",
    #     "business_name": "NPT"
    # },
    @property
    def get_file_url(self):
        
        return urljoin(settings.BACKEND_URL, self.image.url)
       

# Create your models here.



class Item(models.Model):
    name = models.CharField(max_length=200)
    price = models.IntegerField()
    recipes = models.CharField(max_length=300)
    category_id = models.ForeignKey(Category,related_name="items",on_delete=models.SET_NULL,blank=True,null=True)
    image = models.ImageField(upload_to=item_image_generator,blank=True,null=True)

    class Meta:
        pass
    def __str__(self):
        return f'{self.name}'
    
    @property
    def get_file_url(self):
        
        return urljoin(settings.BACKEND_URL, self.image.url)

class OrderItem(models.Model):
    item_id = models.ForeignKey(Item,related_name="orders",on_delete=models.CASCADE)
    price = models.IntegerField()
    qty = models.IntegerField(default=1)


    def __str__(self):
        return self.item_id.name

    def __unicode__(self):
        return 

ORDER_STATUS = (
    ('pending', 'Pending'),
    ('cooking', 'Cooking'),
    ('done', 'Done'),
    # ('En','Engineering'),
    # ('Ps','Psycology'),
)

class Order(models.Model):
    items =models.ManyToManyField(OrderItem)
    seat = models.ForeignKey(Seat,related_name="orders",on_delete=models.CASCADE)
    status = models.CharField(choices=ORDER_STATUS,max_length=10)
    total_price = models.IntegerField()

    def __str__(self):
        return self.seat.seat_no















   

