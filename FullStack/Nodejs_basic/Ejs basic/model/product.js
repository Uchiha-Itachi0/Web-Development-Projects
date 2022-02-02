const fs = require('fs');
const { dirname } = require('path');
const path = require('path')

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
    constructor(title, imgURL, price, desc) {
        this.title = title
        this.imgURL = imgURL
        this.price = price
        this.desc = desc
    }

    save() {
        // Assingning unique id to every objects
        this.id = Math.random().toString();
        // !* To append in the existing file we have to first read the file
        // !* But the file is in JSON format therefore we have to first
        // !* convert the JSON to JS object then append the input data to
        // !* to that file. But if we try to convert an non-existing file data 
        // !* (which means there is no data) will gives us error. Therefore we only
        // !* read the content if there is no error 

        // Now when getProductData is executed it return either empty array or array containg
        // objects loded from file
        getProductFromFile(products => {
            // We pass an anamanous function in gerProductFromFile and this function is called
            // when getProduct.. will return something
            // products is the argument of the anamanous function 
            products.push(this);
            // Converitng the JS object back to JSON file to store in file
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        })


    }

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
    static findById(prodId, cb){
        getProductFromFile(product => {
            const prod = product.find(p => p.id === prodId);
            cb(prod);
        });
    }
}