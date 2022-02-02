const express = require('express');
const adminController = require('../controls/admin')

const route = express.Router();

route.get('/add-product', adminController.getAddProduct) 

route.post('/add-product', adminController.postAddProduct)

route.get('/admin-product', adminController.getAdminProduct)
module.exports = route