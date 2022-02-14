const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),
    'Data', 'product.json');
const p_cart = path.join(path.dirname(process.mainModule.filename),
    'Data', 'cart.json');
const getProductFromProductFile = (callback) => {
    fs.readFile(p, (err, datafile) => {
        if (err) {
            return callback([]);
        }
        return callback(JSON.parse(datafile));
    });
}
const getProductFromCartFile = (callback) => {
    fs.readFile(p_cart, (err, datafile) => {
        if (err) {
            return callback([{ cart_list: [], total_price: 0 }]);
        }
        return callback(JSON.parse(datafile));
    })
}
module.exports = class Cart {
    static addProduct(prodId) {

        // Fetching the Product from Product database 
        // because we need the product details to add in the cart product data
        getProductFromProductFile(product => {

            // Filtering the product which we need to add to the cart.
            const prod = product.find(p => p.id.trim() === prodId.trim());

            // Adding the total number identifier to the product object
            // because if we add the same product twice then the number of product should increase
            // and not the actual prodcut.
            prod["qty"] = 1;

            // Fetching the data from the cart database
            // ! Model of cart DataBase
            // ?[{ cart_list: [], total_price: 0 }]

            getProductFromCartFile(product => {

                // Checking if the product already exist in the cart or not.
                const boolValue = product[0].cart_list.find(p => p.id.trim() === prod.id.trim());
                if (!boolValue) {
                    product[0].cart_list.push(prod);

                }

                // If the product already exist in the cart then we have to
                // ! Increase it's qty
                // ! Increase it's price
                else {

                    // Finding the product which we need to update
                    product[0].cart_list.find(p => {
                        if (p.id.trim() === prod.id.trim()) {

                            // To increase the price of a particular item we need to multiply 
                            // the qty with initial price but since we are increase the initial price
                            // with every single addition of same item. Therefore to keep track of the
                            // initial price we are dividing the price with qty.
                            p.price = p.price / p.qty;
                            p.qty += 1;
                            p.price = p.price * p.qty;
                        }
                    })
                }

                // Increasing the total price.
                product[0].total_price += +prod.price;
                fs.writeFile(p_cart, JSON.stringify(product), (err) => {
                    console.log(err);
                })

            })
        })
        // Analyse the cart
        // Add in the cart or increase the no.
    }

    static fetchCart(callback) {
        getProductFromCartFile(callback);
    }

    static deleteProduct(prodId) {

        // Fetch the cart
        // ! Model of cart DataBase
        // ?[{ cart_list: [], total_price: 0 }]
        getProductFromCartFile(product => {
            // delete the product using splice
            const prod_index = product[0].cart_list.findIndex(p => p.id.trim() === prodId.trim())
            if (prod_index !== -1) {
                product[0].total_price -= product[0].cart_list[prod_index].price;
                product[0].cart_list.splice(prod_index, 1);

                // store the modified cart to the dataBase
                fs.writeFile(p_cart, JSON.stringify(product), err => {
                    if (err) {
                        console.log(err);
                    }
                })
            }


        })
    }
}
