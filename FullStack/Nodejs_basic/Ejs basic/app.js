const express = require('express');
const bodyParser = require('body-parser');
// ** All the routes are defined in sepetate files
const publicRoute = require('./routes/shop')
const adminRoute = require('./routes/admin');
const errorController = require('./controls/error');
const sequelize = require('./util/database');
const Product = require('./model/product');
const User = require('./model/user');
const Cart = require('./model/cart');
const CartItem = require('./model/cart-item');
const Order = require('./model/order');
const OrderItem = require('./model/order-item');

const app = express();

// Setting view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

// Need to registered the dummy user to the req object so that we can access it from anywhere
// inside our program.

// Midleware does not execute when the program first runs they are registered in node and funneled
// through the incomming request.
app.use((req, res, next) => {
    User.findByPk(1).then((user) => {
        req.user = user;
        next();
    })
        .catch(error => console.log(error));
})

app.use(publicRoute);
app.use('/admin', adminRoute);
app.use(errorController)


// Setting the relationship.
User.hasMany(Product, {
    onDelete: 'CASCADE'
});
Product.belongsTo(User);
Cart.belongsTo(User);
User.hasOne(Cart);
Product.belongsToMany(Cart, { through: CartItem });
Cart.belongsToMany(Product, { through: CartItem });
Order.belongsTo(User);
User.hasOne(Order);
Order.belongsToMany(Product, {through: OrderItem});
Product.belongsToMany(Order, { through: OrderItem });
// Syncing all the tables
sequelize
    .sync()
    .then(() => {
        // returning this to prevent nestiong of then statement
        return User.findByPk(1);
    })
    .then((user) => {
        if (!user) {
            return User.create({
                name: 'Anubahv Shukla',
                email: 'anubhavshukla@gmail.com'
            });
        }
        // All things inside the then statement is resolved in Promise so we don't need to
        // explicitly resolve the promise to user
        return user
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is listning on port : ${port}`);
        });
    })
    .catch(error => {
        console.log(error);
    });

