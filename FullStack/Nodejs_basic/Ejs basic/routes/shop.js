const express = require('express');
const path = require('path');
const shopController = require('../controls/shop')

const route = express.Router();
route.get('/product', shopController.getProduct);
route.get('/product/:productID', shopController.getProductDetails);

route.get('/', shopController.getIndex);

route.get('/cart', shopController.getCart);
route.post('/cart', shopController.postProduct);
route.post('/delete-cart-product', shopController.deleteCartProduct)
route.get('/order', shopController.getOrder);
route.post('/order', shopController.postOrder);
route.post('/delete-order-product', shopController.deleteOrderProduct);

// route.get('/checkout')

module.exports = route