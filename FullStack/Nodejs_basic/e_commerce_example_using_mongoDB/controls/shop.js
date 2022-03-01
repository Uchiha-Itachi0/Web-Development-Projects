
const Product = require('../model/product');
const Order = require('../model/order');

exports.getProduct = (req, res, next) => {

    // This will return the array of the products
    Product.find()
        .then((products) => {
            res.render('shop/product-list', {
                products: products,
                pageTitle: 'Product',
                url: '/product',
                isLoggedIn: req.session.isLoggedIn
            });
        })
        .catch((err) => {
            console.log(err);
        })

}
exports.getProductDetails = (req, res, next) => {
    const product_id = req.params.productID;
    Product.findById(product_id)
        .then(product => {
            res.render('shop/product-detail', {
                products: product,
                pageTitle: 'Product',
                url: '/product',
                isLoggedIn: req.session.isLoggedIn
            });
        })
        .catch(err => console.log(err));
}


exports.getIndex = (req, res, next) => {
    res.render('shop/index', {
        url: '/',
        pageTitle: 'Shop',
        isLoggedIn: req.session.isLoggedIn
    })
}

exports.getCart = (req, res, next) => {

    req.user.
        populate('cart.items.productId')
        .then(user => {
            let totalPrice = 0;
            const products = user.cart.items;
            products.map(({ productId, quantity }) => {
                productId.price = productId.price * quantity;
                totalPrice += productId.price;
            });
            req.user.save();
            res.render('shop/cart', {
                url: '/cart',
                pageTitle: 'Cart',
                products: products,
                totalPrice: totalPrice,
                isLoggedIn: req.session.isLoggedIn
            });
        })
        .catch(err => console.log(err));


}

exports.postProduct = (req, res, next) => {
    const product_id = req.body.product_id;
    Product.findById(product_id)
        .then(product => {
            req.user.addToCart(product);
        })
        .then(() => res.redirect('/product'))
        .catch(err => console.log(err));

}

exports.deleteCartProduct = (req, res, next) => {
    req.user.deleteCartItem(req.body.prodId)
        .then(() => {
            res.redirect('/cart');

        })
        .catch(err => console.log(err));
}

exports.getOrder = (req, res, next) => {
    // 1. We need the get all the product inside the order

    Order.find({ 'user.userId': req.user._id })
        .then(product => {
            // let totalPrice = 0;
            // product.map(prod => {
            //     totalPrice += prod.price * prod.orderItem.quantity;
            // })
            res.render('shop/order', {
                url: '/order',
                pageTitle: 'Orders',
                products: product ? product : product[0].products,
                isLoggedIn: req.session.isLoggedIn
            })
        })
        .catch(err => console.log(err));

}

exports.postOrder = (req, res, next) => {
    // To get the cart item into the order
    // 1. First we need to fetch the cart items
    // 2. Fetched cart item will not be in the same structure as we defined for order
    // so we need to fix that
    // 3. After that we create the new order with all the data required.
    // 4. Then we need to empty the cart.

    // STEP: 1
    req.user
        .populate('cart.items.productId')
        .then((user) => {

            // STEP: 2
            const product = user.cart.items.map(i => {
                // product is an obj so we need to return the obj.
                return { quantity: i.quantity, product: { ...i.productId._doc } };
            });
            // STEP: 3
            product.forEach(element => {
                const order = new Order({
                    products: element,
                    user: {
                        name: req.user.name,
                        userId: req.user
                    }
                });
                order.save();
            });
            return
        })
        .then(() => {
            return req.user.emptyCart();
        }).
        then(() => res.redirect('/order'))
        .catch(err => console.log(err))
}

exports.deleteOrderProduct = (req, res, next) => {
    // 1. Find the order number (id) and delete it
    Order.findByIdAndRemove(req.body.prodId)
        .then(() => {
            res.redirect('/order')
        })
        .catch(err => console.log(err))
}