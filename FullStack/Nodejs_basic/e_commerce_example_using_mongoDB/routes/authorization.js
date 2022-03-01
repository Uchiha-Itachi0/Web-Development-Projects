const express = require('express');
const authorizationController = require('../controls/authorization');
const route = express.Router();

route.get('/login', authorizationController.getLogIn);
route.post('/login', authorizationController.postLogIn);
route.post('/logout', authorizationController.postLogout);
route.get('/sign-in', authorizationController.getSignIn);
route.post('/sign-in', authorizationController.postSignIn);

module.exports = route;