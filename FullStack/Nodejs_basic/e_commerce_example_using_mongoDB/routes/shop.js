const express = require('express');
const isAuth = require('../controls/is-auth');
const path = require('path');
const shopController = require('../controls/shop')

const route = express.Router();
route.get('/product', shopController.getProduct);
route.get('/product/:productID', shopController.getProductDetails);

route.get('/', shopController.getIndex);

route.get('/cart', isAuth, shopController.getCart);
route.post('/cart', isAuth, shopController.postProduct);
route.post('/delete-cart-product', isAuth, shopController.deleteCartProduct);
route.get('/order', isAuth, shopController.getOrder);
route.post('/order', isAuth, shopController.postOrder);
route.post('/delete-order-product', isAuth, shopController.deleteOrderProduct);

// route.get('/checkout')

module.exports = route