const express = require('express');
const adminController = require('../controls/admin')
const isAuth = require('../controls/is-auth')
const route = express.Router();

route.get('/add-product', isAuth, adminController.getAddProduct) 

route.post('/add-product', isAuth, adminController.postAddProduct)

route.get('/admin-product', isAuth, adminController.getAdminProduct)

route.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

route.post('/edit-product', isAuth, adminController.postEditProduct);

route.post('/delete-product', isAuth, adminController.deleteProduct);
module.exports = route