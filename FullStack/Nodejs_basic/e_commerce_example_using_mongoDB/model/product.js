const mongoose = require('mongoose');

// Defining how our product model should look like
const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Product', productSchema);