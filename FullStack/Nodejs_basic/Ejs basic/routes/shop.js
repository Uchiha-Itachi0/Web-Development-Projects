const express = require('express');
const path = require('path');
const shopController = require('../controls/shop')

const route = express.Router();
route.get('/product', shopController.getProduct)

route.get('/', shopController.getIndex);

route.get('/cart', shopController.getCart);

// route.get('/checkout')

module.exports = route