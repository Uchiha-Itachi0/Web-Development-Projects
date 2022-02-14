const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const orderItem = sequelize.define('orderItem', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        Unique: true
    },
    quantity: Sequelize.INTEGER,
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
    }
});

module.exports = orderItem;