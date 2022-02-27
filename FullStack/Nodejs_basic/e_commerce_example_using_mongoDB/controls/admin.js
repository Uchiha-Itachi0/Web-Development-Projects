const Product = require('../model/product')

exports.getAddProduct = (req, res, next) => {

    res.render('admin/edit-product', {
        pageTitle: 'Add-product',
        url: '/add-product',
        editMode: false,
        isLoggedIn: req.session.isLoggedIn
    })
}

exports.postAddProduct = (req, res, next) => {
    // *! We are not using pody parser then how we are able to parse it.
    // ** This is because we are importing it, to the main app.js which connacts everything.
    // ** And in that we are using body-parser.
    // ** in the end every thing will run in app.js and hence we don't need it here.
    const title = req.body.title;
    const imgUrl = req.body.imgUrl;
    const price = req.body.price;
    const description = req.body.description;
    const userId = req.user

    // Saving product to the database
    // Product is an model which expect the data in obj format
    const product = new Product({
        title: title,
        imgUrl: imgUrl,
        price: price,
        description: description,
        userId: userId
    });
    // To save the data into the database
    product.save()
        .then((result) => {
            res.redirect('/product')
            console.log('DATA STORED');
        })
        .catch((error) => {
            console.log(error);
        });
}

exports.getAdminProduct = (req, res, next) => {
    // THis will return the array of the products
    Product.find()
        .then((products) => {
            res.render('admin/admin-product-list', {
                url: '/admin-product',
                pageTitle: 'Admin product',
                products: products,
                isLoggedIn: req.session.isLoggedIn
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

exports.getEditProduct = (req, res, next) => {
    const productId = req.params.productId;
    const editMode = req.query.edit;
    Product.findById(productId)
        .then((product) => {
            if (!product) {
                return res.redirect('/');
            }
            res.render('admin/edit-product', {
                pageTitle: 'edit-product',
                url: '/edit-product',
                editMode: editMode,
                product: product,
                isLoggedIn: req.session.isLoggedInn
            });
        })
        .catch((error) => {
            console.log(error);
        });

}

exports.postEditProduct = (req, res, next) => {

    Product.updateOne({ _id: req.body.prodId }, {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imgUrl: req.body.imgUrl
    })
        .then(() => {
            console.log("UPDATED");
            res.redirect('/product')

        })
        .catch((error) => {
            console.log(error);
        });
}

exports.deleteProduct = (req, res, next) => {
    const prodId = req.body.prodId;
    req.user.deleteCartItem(prodId)
        .then(() => {
            return Product.findByIdAndDelete(prodId)
        })
        .then(() => {
            console.log("DATA DELETED");
        })
        .then(() => res.redirect('/product'))
        .catch((error) => {
            console.log(error);
        });
}


