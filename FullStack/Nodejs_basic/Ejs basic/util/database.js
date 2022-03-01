const Sequelize = require('sequelize');
const PASS = require('./config')

const sequelize = new Sequelize('node_e_commerce', 'root', PASS, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;








// const mysql = require('mysql2');

// // Setting up the connection pool
// const pool = mysql.createPool({
//     host: "localhost",
//     user: 'root',
//     password: 'sushma!',
//     database: 'node_e_commerce'
// });


// module.exports = pool.promise();
