from django.contrib import admin

from .models import (
    Item, OrderItem, Order,Electronic,Phone,Jewelry,Tablet,Grocery
)
  
admin.site.register(Item)
admin.site.register(Electronic)
admin.site.register(Phone)
admin.site.register(Jewelry)
admin.site.register(Grocery)
admin.site.register(Tablet)
admin.site.register(OrderItem)
admin.site.register(Order)


