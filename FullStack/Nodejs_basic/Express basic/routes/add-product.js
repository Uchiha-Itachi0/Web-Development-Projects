const express = require('express');
const bodyParser = require('body-parser');

const route = express.Router();
route.use(bodyParser.urlencoded({extended: true}))

route.get('/add-product', (req, res, next) => {
    res.send('<form method = "POST" action = "/admin/add-product"><input type = "text" name = "Absolute-Truth"/><button type = "submit">Add</button></form>')
});

route.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})


module.exports = route

