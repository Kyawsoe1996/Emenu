from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
   index,
   ok,
   SeatViewSet,
   BusinessViewSet,
   
   CategoryDetailView,
   ItemListView,
   CategoryViewSet   
)


app_name="emenu_api"
# Create a router and register our viewsets with it.
router = DefaultRouter()

router.register(r'business', BusinessViewSet,basename="business")
router.register(r'seats', SeatViewSet,basename="seats")
router.register(r'category',CategoryViewSet,basename="category")




# The API URLs are now determined automatically by the router.
urlpatterns = [
   path(r'',index,name='index'),
   path(r'ok/',ok,name='gg'),
   

]
categor_url_patterns = [
   path(r'category/<int:pk>/',CategoryDetailView.as_view(),name='category-detail'),


]
item_url_patterns = [
   path(r'item/',ItemListView.as_view(),name='item-list'),

]


# router.register(r'', view.LeaveViewSet,basename="leave")
urlpatterns += router.urls
urlpatterns+= categor_url_patterns
urlpatterns+=item_url_patterns


