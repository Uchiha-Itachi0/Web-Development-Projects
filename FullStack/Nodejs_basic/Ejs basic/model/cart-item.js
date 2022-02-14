const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const CartItem = sequelize.define('cartItem', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        Unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: Sequelize.INTEGER,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    }
});

module.exports = CartItem;