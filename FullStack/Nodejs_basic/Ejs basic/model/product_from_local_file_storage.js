const fs = require('fs');
const { dirname } = require('path');
const path = require('path');
const Cart = require('./cart');

const p = path.join(path.dirname(process.mainModule.filename),
    'Data', 'product.json');
// This is a helper fucntion which deals with
// reading the file, if the file doesn't exit it return empty array
// If it exist it read the file convert it in JS object
// How save and fetch using this is defined in them
const getProductFromFile = (cb) => {
    fs.readFile(p, (err, datafile) => {
        if (err) {
            return cb([])
        }
        return cb(JSON.parse(datafile))
    })
}
module.exports = class Product {
    constructor(id, title, imgURL, price, desc) {
        this.id = id
        this.title = title
        this.imgURL = imgURL
        this.price = price
        this.desc = desc
    }

    save() {
        // Assingning unique id to every objects

        // * If we are editing some data then it already has some id therefore we
        //  * don't need to define the id here

        //// this.id = Math.random().toString();

        // !* To append in the existing file we have to first read the file
        // !* But the file is in JSON format therefore we have to first
        // !* convert the JSON to JS object then append the input data to
        // !* to that file. But if we try to convert an non-existing file data 
        // !* (which means there is no data) will gives us error. Therefore we only
        // !* read the content if there is no error 

        // Now when getProductData is executed it return either empty array or array containg
        // objects loded from file
        getProductFromFile(products => {
            // We pass an anamanous function in getProductFromFile and this function is called
            // when getProduct.. will return something
            // products is the argument of the anamanous function 

            // * If the id is already defined then we want to edit the existing
            // * data and therefore we want another logic
            if (this.id) {
                let update_data_index = products.findIndex(p => p.id.trim() === this.id.trim());
                const updated_data = [...products];
                updated_data[update_data_index] = this;
                fs.writeFile(p, JSON.stringify(updated_data), (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
            else {
                this.id = Math.random().toString();
                products.push(this);
                // Converitng the JS object back to JSON file to store in file
                fs.writeFile(p, JSON.stringify(products), (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }

        })


    }

    // !----------------------------------------------------------------
    /**
       * ? For Editing the data I was using this approach. Creating another function
       * ? to for editing. But I can edit the file in the same save method which is used to save
       * ? to save the new data.
       * ? In this approach I was facing the problem.
       * ! -----I already have an id how can I save it since it will create another id
       * ! -----Save method is pushing the data so the order of data stored in local storage will be changed.
       * ? This was my approach.
       * 
       * static editProduct(prodId, prodTitle, prodImg, prodPrice, prodDesc) {
            getProductFromFile(product => {
                const prod_index = product.findIndex(p => p.id === prodId.trim());
                const prod = product[prod_index]
                prod.title = prodTitle;
                prod.imgURL = prodImg;
                prod.price = prodPrice;
                prod.desc = prodDesc;
                product[prod_index] = prod;
                fs.writeFile(p, JSON.stringify(product), err => {
                    if (err) {
                        console.log(err);
                    }
                })
            })
        }
    
        * ? The above problem can be easily solved using.
        * !--------If statements (This will handle the error 1)
        * !--------Spread operator (This will handle error 2)
        * if (this.id) {
            let update_data_index = products.findIndex(p => p.id.trim() === this.id.trim());
            const updated_data = [...products];
            updated_data[update_data_index] = this;
            fs.writeFile(p, JSON.stringify(updated_data), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
    
        *!------------------------------------------------------------------------------------
    * */

    static fetchAll(cb) {
        // !* Defined a callback function so that the products will be
        // !* will displayed when the reading file is done.
        // !* We have done this because readfile is sync fucntion and node
        // !* will register it and proceeds further but we don't want that.
        // !* without returning any products if we proceeds forward than our
        // !* product will be undifined and ejs will give error
        // !* But since we have defined the callback fucntion the render will only
        // !* execute when the fetchAll method is done.

        // const p = path.join(path.dirname(process.mainModule.filename), 
        // 'Data', 'product.json');
        // fs.readFile(p, (err, fileContent) => {
        //     if(err){
        //         // Always except an array
        //         return [];
        //     }
        //     return JSON.parse(fileContent)

        // });
        getProductFromFile(cb);
    }
    static findById(prodId, cb) {
        getProductFromFile(product => {
            const prod = product.find(p => p.id === prodId);
            cb(prod);
        });
    }



    static deleteProduct(prodId) {


        // Fetching the product from the file (NOTE: product is an array containg objects)
        getProductFromFile(product => {

            // Deleting the object with given id using splice
            const prod_index = product.findIndex(p => p.id.trim() === prodId.trim())
            product.splice(prod_index, 1);

            // The alternate way to do this is by using filter method which ofcourse will
            //  will return the new array so we have to write that on the file
            // ! Code for that will be:
            // ?const updated_product = product.filter(p => p.id.trim() !== prodId.trim());
            // Now we have to write this code.

            // Storing the final product to the file.
            fs.writeFile(p, JSON.stringify(product), err => {
                if (err) {
                    console.log(err);
                }
                else{
                    // We also need to delete the product from the cart if it's present
                    Cart.deleteProduct(prodId)
                }
            })

        })
    }
}



// Product.fetchAll((products) => {
//     res.render('shop/product-list', {
//         products: products,
//         pageTitle: 'Product',
//         url: '/product'
//     })
// });