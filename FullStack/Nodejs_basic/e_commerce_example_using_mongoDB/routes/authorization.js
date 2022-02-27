const express = require('express');
const authorizationController = require('../controls/authorization');
const route = express.Router();

route.get('/login', authorizationController.getLogIn);
route.post('/login', authorizationController.postLogIn);
route.post('/logout', authorizationController.postLogout);

module.exports = route;