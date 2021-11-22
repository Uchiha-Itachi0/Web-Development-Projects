// !* This is where all are products colntroller is

const Product = require('../model/product')

exports.getProduct = (req, res, next) => {
    // !? We defined the render method as a callback fucntion to see why
    // !? refer to fetchAll method in product.js in model folder
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            products: products,
            pageTitle: 'Product',
            url: '/product'
        })
    });
}

exports.getIndex =(req, res, next) => {
    res.render('shop/index', {
        url : '/',
        pageTitle : 'Shop'
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        url : '/cart',
        pageTitle : 'Cart'
    })
}