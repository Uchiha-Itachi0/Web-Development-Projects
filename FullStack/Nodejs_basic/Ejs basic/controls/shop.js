// !* This is where all are products colntroller is

const Product = require('../model/product');
const Cart = require('../model/cart');

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
exports.getProductDetails = (req, res, next) => {
    const product_id = req.params.productID;
    Product.findById(product_id, products => {
        res.render('shop/product-detail', {
            products: products,
            pageTitle: 'Product',
            url: '/product'
        });
    })
}
exports.getIndex = (req, res, next) => {
    res.render('shop/index', {
        url: '/',
        pageTitle: 'Shop'
    })
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        url: '/cart',
        pageTitle: 'Cart'
    })
}

exports.postProduct = (req, res, next) => {
    const product_id = req.body.product_id;
    Cart.addProduct(product_id);
    res.redirect('/cart')
}

exports.getOrder = (req, res, next) => {
    res.render('shop/order', {
        url: '/order',
        pageTitle: 'Orders'
    })
}