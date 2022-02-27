const mongoose = require('mongoose');
const Product = require('./product')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        // Contains array of obj
        items: [
            {
                productId: {
                    type: mongoose.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ]
    }
});


userSchema.methods.addToCart = function (product) {
    // Check if there is already a product with this id
    const prodIndex = this.cart.items.findIndex(prod => prod.productId.toString() === product._id.toString());

    const updatedCart = [...this.cart.items];
    let newQuantity = 1;

    // What should happen if the product is already present in the cart
    if (prodIndex >= 0) {
        updatedCart[prodIndex].quantity += 1;
    }

    // What should happen if the product is not present in the cart
    else {
        // Push the new product in the cart
        updatedCart.push({
            productId: product._id,
            quantity: newQuantity
        });
    }

    // Replace the old cart with the new cart
    this.cart = { items: updatedCart };

    // Save all the changes
    this.save();
}

userSchema.methods.deleteCartItem = function (prodId) {
    const updatedCart = this.cart.items.filter(item => item.productId === prodId);
    this.cart.items = updatedCart;
    return this.save();
}

userSchema.methods.emptyCart = function () {
    // Setting the itmes to emty array
    this.cart = [{ items:[]}]
    this.save();
}

module.exports = mongoose.model('User', userSchema);