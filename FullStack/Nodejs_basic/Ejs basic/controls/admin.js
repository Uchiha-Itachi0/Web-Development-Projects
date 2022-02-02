const Product = require('../model/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add-product',
        url: '/add-product'
    })
}

exports.postAddProduct = (req, res, next) => {

    // *! We are not using pody parser then how we are able to parse it.
    // ** This is because we are importing it, to the main app.js which connacts everything.
    // ** And in that we are using body-parser.
    // ** in the end every thing will run in app.js and hence we don't need it here.
    const product = new Product(req.body.title, req.body.imgURL, req.body.price, req.body.desc);
    product.save();
    // product.push(req.body.product);
    res.redirect('/product');
}

exports.getAdminProduct = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/admin-product-list', {
            url: '/admin-product',
            pageTitle: 'Admin product',
            products: products
        })

    })
}
