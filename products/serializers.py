from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
from products.models import (Item, Order, OrderItem,Jewelry,Electronic,Phone,Tablet,Grocery)

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username',)


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')


class ItemSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Item
        fields = (
            'id',
            'title',
            'price',
            'discount_price',
            'slug',
            'description',
            'imageurl1',
            'imageurl2'
           
        )

class JewelrySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Jewelry
        fields = (
            'id',
            'title',
            'price',
            'discount_price',
            'slug',
            'description',
            'imageurl1',
           
        )
class PhoneSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Phone
        fields = (
            'id',
            'title',
            'price',
            'discount_price',
            'slug',
            'description',
            'imageurl1',
            
        )
class GrocerySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Grocery
        fields = (
            'id',
            'title',
            'price',
            'discount_price',
            'slug',
            'description',
            'imageurl1',
           
        )

class ElectronicSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Electronic
        fields = (
            'id',
            'title',
            'price',
            'discount_price',
            'slug',
            'description',
            'imageurl1',
          
        )

class TabletSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tablet
        fields = (
            'id',
            'title',
            'price',
            'discount_price',
            'slug',
            'description',
            'imageurl1',
          
        )

class OrderItemSerializer(serializers.ModelSerializer):
    item = serializers.SerializerMethodField()
    final_price = serializers.SerializerMethodField()

    class Meta:
        model = OrderItem
        fields = (
            'id',
            'item',
            'quantity',
            'final_price'
        )

    def get_item(self, obj):
        return ItemSerializer(obj.item).data

    def get_final_price(self, obj):
        return obj.get_final_price()


class OrderSerializer(serializers.ModelSerializer):
    order_items = serializers.SerializerMethodField()
    total = serializers.SerializerMethodField()

    class Meta:
        model = Order
        fields = (
            'id',
            'order_items',
            'total'
        )

    def get_order_items(self, obj):
        return OrderItemSerializer(obj.items.all(), many=True).data

    def get_total(self, obj):
        return obj.get_total()


class ItemDetailSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Item
        fields = (
            'id',
            'title',
            'price',
            'discount_price',
            'slug',
            'description',
            'imageurl1',
            'imageurl2'
        )
