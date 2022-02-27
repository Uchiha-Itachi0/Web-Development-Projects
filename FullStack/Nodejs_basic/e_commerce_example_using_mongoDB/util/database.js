const mongodb = require('mongodb');

let _db;
const mongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://Anubhav:VKgMhY6ntKxouQFh@cluster0.4msls.mongodb.net/E_Commerce_Practice?retryWrites=true&w=majority";

// Node will register the connection function and then it will move forward, but to move forward
// we need the client obj. Therefore to prevent the running of our server before connection to 
// database is made we need to define the callback.
// So when the node is done connecting to the database only then our server will run.

exports.mongoConnect = callback => {
    mongoClient.connect(uri)
    .then(client => {

        // returns connetction to the database
        _db = client.db();
        callback();
    })
    .catch(err => console.log(err));
}

// This will return the connected database connection
// It is simply done to prevent making the connection to the database every time we need
// to perform some operation to the database
exports.getDb = () => {
    if(_db){
        return _db;
    }
}









// const mysql = require('mysql2');

// // Setting up the connection pool
// const pool = mysql.createPool({
//     host: "localhost",
//     user: 'root',
//     password: 'sushma!',
//     database: 'node_e_commerce'
// });


// module.exports = pool.promise();
