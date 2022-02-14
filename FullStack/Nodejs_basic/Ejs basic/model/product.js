const Sequelize = require('sequelize');
const sequelize = require('../util/database');


// Creating Product model with the help of Sequelize
const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        Unique: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;





// const Cart = require('./cart');
// const db = require('../util/database');
// module.exports = class Product {
//     constructor(id, title, img_url, price, desc) {
//         this.id = id
//         this.title = title
//         this.img_url = img_url
//         this.price = price
//         this.desc = desc
//     }

//     save() {
//         this.price = Number(this.price)
//         // Storing data into the database
//         return db.query('INSERT INTO product (title, img_url, description, price) VALUES (?, ?, ?, ?)',
//         [this.title, this.img_url, this.desc, this.price]);

//     }

//     static fetchAll() {

//         // Fetching data from the database
//         // db returns promise
//         return db.execute('SELECT * FROM product');
        
//     }
//     static findById(prodId) {
//         const qry = 'SELECT * FROM product WHERE id = ?';
//         return db.execute(qry, [prodId]);
//     }



//     static deleteProduct(prodId) {

//     }
// }



