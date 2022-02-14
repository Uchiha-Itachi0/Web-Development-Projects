const Product = require('../model/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {
        pageTitle: 'Add-product',
        url: '/add-product',
        editMode: false
    })
}

exports.postAddProduct = (req, res, next) => {

    // *! We are not using pody parser then how we are able to parse it.
    // ** This is because we are importing it, to the main app.js which connacts everything.
    // ** And in that we are using body-parser.
    // ** in the end every thing will run in app.js and hence we don't need it here.
    const title =req.body.title;
    const img_url = req.body.img_url;
    const price = req.body.price;
    const description = req.body.description;
    
    // Saving product to the database
    req.user.createProduct({
        title: title,
        img_url: img_url,
        price: price,
        description: description
    })
    .then((result) => {
        res.redirect('/product')
        console.log('Data stored');
    })
    .catch((error) => {
        console.log(error);
    });
}

exports.getAdminProduct = (req, res, next) => {
    req.user.getProducts()
    .then((products) => {
        res.render('admin/admin-product-list', {
            url: '/admin-product',
            pageTitle: 'Admin product',
            products: products
        })
    })
    .catch((error) => {
        console.log(error);
    });
}

exports.getEditProduct = (req, res, next) => {
    const productId = req.params.productId;
    const editMode = req.query.edit;
    Product.findByPk(productId)
    .then((product) => {
        if (!product){
            return res.redirect('/');
        }
        res.render('admin/edit-product', {
            pageTitle: 'edit-product',
            url: '/edit-product',
            editMode: editMode,
            product: product
        });
    })
    .catch((error) => {
        console.log(error);
    });

}

exports.postEditProduct = (req, res, next) => {
    Product.findByPk(req.body.prodId)
    .then((product) => {

        // Storing the updated data to the variables
        product.title = req.body.title;
        product.description = req.body.description;
        product.price = req.body.price;
        product.img_url = req.body.img_url;

        // We need to save the updated data to the database
        // return is simply used to prevent the nesting of then, because if any error occured
        // while saving the data it will be catched by outside catch
        return product.save();
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
    Product.findByPk(prodId)
    .then((product) => {
        return product.destroy();
    })
    .then(() => {
        console.log("DATA DELETED");
    })
    .then(() => res.redirect('/product'))
    .catch((error) => {
        console.log(error);
    });
}


