const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename),
 'Data', 'cart.json');
 const data = require('../Data/product.json');
module.exports = class Cart{
    static addProduct(id){
        // Fetch the existing cart
        const cart = [];
        fs.readFile(p, (err, datafile) => {
            if(err){
                console.log('No cart exist');
                console.log(id);
                console.log(data.find(d => d.id === id));
                // console.log(i);
            }
            else{

            }

        })
        // Analyse the cart
        // Add in the cart or increase the no.
    }
}
