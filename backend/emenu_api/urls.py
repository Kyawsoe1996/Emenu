from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
   index,
   SeatViewSet,
   BusinessViewSet
)


app_name="emenu_api"
# Create a router and register our viewsets with it.
router = DefaultRouter()

router.register(r'business', BusinessViewSet,basename="business")
router.register(r'seats', SeatViewSet,basename="seats")




# The API URLs are now determined automatically by the router.
urlpatterns = [
   path(r'',index,name='index')

]
# router.register(r'', view.LeaveViewSet,basename="leave")
urlpatterns += router.urls

