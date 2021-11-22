const express = require('express');
const adminController = require('../controls/admin')

const route = express.Router();

route.get('/admin-product', adminController.getAddProduct) 

route.post('/admin-product', adminController.postAddProduct)

module.exports = route