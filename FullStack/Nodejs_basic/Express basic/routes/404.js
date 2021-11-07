const express = require('express');


// Router help us to organise and controll our routing.
const route = express.Router();

route.use('/', (req, res, next) => {
    res.status(404).send('<h1>This page does not exists</h1>')
})

module.exports = route