const localhost = "http://localhost:8000";

export const endpoint = `${localhost}`;

export const productListURL = `${endpoint}/products/`;
export const ElectronicListURL = `${endpoint}/electronics/`;
export const ElectronicDetailURL = id => `${endpoint}/electronics/${id}/`;
export const GroceryListURL = `${endpoint}/groceries/`;
export const GroceryDetailURL = id => `${endpoint}/groceries/${id}/`;
export const PhoneListURL = `${endpoint}/phones/`;
export const PhoneDetailURL = id => `${endpoint}/phones/${id}/`;
export const JewelryListURL = `${endpoint}/jewelry/`;
export const JewelryDetailURL = id => `${endpoint}/jewelry/${id}/`;
export const TabletListURL = `${endpoint}/tablets/`;
export const TabletDetailURL = id => `${endpoint}/tablets/${id}/`;

export const productDetailURL = id => `${endpoint}/products/${id}/`;
export const addToCartURL = `${endpoint}/add-to-cart/`;
export const orderSummaryURL = `${endpoint}/order-summary/`;
export const orderItemUpdateQuantityURL = `${endpoint}/order-item/update-quantity/`;
export const orderItemDeleteURL = id => `${endpoint}/order-items/${id}/delete/`;