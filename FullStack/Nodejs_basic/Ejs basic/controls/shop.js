// !* This is where all are products colntroller is

const Product = require('../model/product');
const Cart = require('../model/cart');

exports.getProduct = (req, res, next) => {
    // Since fetchAll return a promise we can use then (The below code will only execute when
    // The above code return something that's the advantage of using promises)

    Product.findAll()
        .then((products) => {
            res.render('shop/product-list', {
                products: products,
                pageTitle: 'Product',
                url: '/product'
            });
        })
        .catch((err) => {
            console.log(err);
        })

}
exports.getProductDetails = (req, res, next) => {
    const product_id = req.params.productID;

    // Finding data with the help of the id
    Product.findByPk(product_id)
        .then((products) => {
            // Returns obj containing the data
            res.render('shop/product-detail', {
                products: products,
                pageTitle: 'Product',
                url: '/product'
            });
        })
        .catch(err => {
            console.log(err);
        })

    // Product.findAll({
    //     where: {
    //         id: product_id
    //     }
    // })
    // .then(([products]) => {
    //     res.render('shop/product-detail', {
    //         products: products,
    //         pageTitle: 'Product',
    //         url: '/product'
    //     });
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
}
exports.getIndex = (req, res, next) => {
    res.render('shop/index', {
        url: '/',
        pageTitle: 'Shop'
    })
}

exports.getCart = (req, res, next) => {

    req.user.getCart()
        .then(cart => {
            return cart.getProducts();
        })
        .then(product => {
            let totalPrice = 0;
            product.map(prod => {
                totalPrice += prod.price * prod.cartItem.quantity;
            })
            res.render('shop/cart', {
                url: '/cart',
                pageTitle: 'Cart',
                products: product,
                total_price: product,
                total_price: totalPrice
            });
        })
        .catch(err => console.log(err));
    // Cart.fetchCart((products) => {
    //     
    // })

}

exports.postProduct = (req, res, next) => {
    const product_id = req.body.product_id;
    let fetchedCart;
    let newQuantity = 1;

    // First we need to get the cart of the respective user to see if the product already exists
    // in the cart or not.
    req.user.getCart()
        .then((cart) => {
            fetchedCart = cart;
            return cart.getProducts({ where: { id: product_id } });
        })
        .then((products) => {
            if (products.length > 0) {
                let product = products[0];
                let oldQuantity = product.cartItem.quantity;
                newQuantity = oldQuantity + 1;

                return product;
            }

            return Product.findByPk(product_id)
        })
        .then(product => {
            let newPrice = product.price * newQuantity;
            return fetchedCart.addProduct(product, {
                through: {
                    quantity: newQuantity,
                    price: newPrice
                }
            });
        })
        .then(() => {
            res.redirect('/product')

        })
        .catch(err => console.log(err));

}

exports.deleteCartProduct = (req, res, next) => {
    req.user.getCart()
        .then((cart) => {
            return cart.getProducts({ where: { id: req.body.prodId } })
        })
        .then((products) => {
            return products[0].cartItem.destroy();
        })
        .then(() => {
            res.redirect('/cart');

        })
        .catch(err => console.log(err));
}

exports.getOrder = (req, res, next) => {
    req.user.getOrder()
        .then((order) => {
            return order.getProducts();
        })
        .then(product => {
            let totalPrice = 0;
            product.map(prod => {
                totalPrice += prod.price * prod.orderItem.quantity;
            })
            res.render('shop/order', {
                url: '/order',
                pageTitle: 'Orders',
                products: product,
                totalPrice: totalPrice
            })
        })
        .catch(err => console.log(err));

}

exports.postOrder = (req, res, next) => {
    let product;
    let fetchedCart;
    req.user.getCart()
        .then((cart) => {
            fetchedCart = cart;
            return cart.getProducts()
        })
        .then((products) => {
            product = products
            return fetchedCart.setProducts(null);
        })
        .then(() => {
            return req.user.getOrder()
        })
        .then(order => {
            return product.forEach(prod => {
                order.addProduct(prod, {
                    through: {
                        price: prod.cartItem.price,
                        quantity: prod.cartItem.quantity
                    }
                });
            })
        })
        .then(result => {
            res.redirect('/order');
        })
        .catch(err => console.log(err))
}

exports.deleteOrderProduct = (req, res, next) => {
    req.user.getOrder()
    .then(order => {
        return order.getProducts({where: {id: req.body.prodId}})
    })
    .then(product => {
        return product[0].orderItem.destroy();
    })
    .then(() => {
        res.redirect('/order')
    })
    .catch(err => console.log(err))
}