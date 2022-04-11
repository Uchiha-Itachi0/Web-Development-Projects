const express = require('express');
const userController = require("../controls/userController");
const route = express.Router();

// Get all the content which are going to display for the user
route.get('/dataForUser', userController.dataForUser);
route.post('/dataForUser', userController.postDataForUser);


module.exports = route;