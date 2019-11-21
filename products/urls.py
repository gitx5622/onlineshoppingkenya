from django.urls import path, include
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings
from .views import (
    ItemListView,
    ItemDetailView,
    AddToCartView,
    OrderDetailView,
    OrderQuantityUpdateView,
    OrderItemDeleteView,
    current_user, 
    UserList,
    GroceryViewSet,
    ElectronicViewSet,
    PhoneViewSet,
    JewelryViewSet,
    TabletViewSet

)


# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'electronics',ElectronicViewSet)
router.register(r'phones', PhoneViewSet)
router.register(r'tablets', TabletViewSet)
router.register(r'jewelry', JewelryViewSet)
router.register(r'groceries', GroceryViewSet)



urlpatterns = [
    path('products/', ItemListView.as_view(), name='product-list'),
    path('', include(router.urls)),
    path('products/<pk>/', ItemDetailView.as_view(), name='product-detail'),
    path('add-to-cart/', AddToCartView.as_view(), name='add-to-cart'),
    path('order-summary/', OrderDetailView.as_view(), name='order-summary'),
    path('order-items/<pk>/delete/', OrderItemDeleteView.as_view(), name='order-item-delete'),
    path('order-item/update-quantity/', OrderQuantityUpdateView.as_view(), name='order-item-update-quantity'),
    path('current_user/', current_user),
    path('users/', UserList.as_view()),    
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
