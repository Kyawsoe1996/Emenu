from django.db import models

class Business(models.Model):
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='business/',blank=True,null=True)
    upload_to='barcodes/'
    location= models.CharField(max_length=200)
    phone = models.IntegerField()
    website_url = models.CharField(max_length=200)
    wifi = models.CharField(max_length=50)



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



   

