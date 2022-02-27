const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoDbStore = require('connect-mongodb-session')(session);
// ** All the routes are defined in sepetate files
const publicRoute = require('./routes/shop')
const adminRoute = require('./routes/admin');
const authorizationRoute = require('./routes/authorization');
const errorController = require('./controls/error');
const { default: mongoose } = require('mongoose');

const User = require('./model/user');

const app = express();

// Setting view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;
const uri = "mongodb+srv://Anubhav:VKgMhY6ntKxouQFh@cluster0.4msls.mongodb.net/E_Commerce_Practice?retryWrites=true&w=majority";



// Connection to the mongoDB server for storing the session

const store = new MongoDbStore({
    uri: uri,
    collection: 'mySession'
})

// Catching error if any
store.on('error', error => console.log(error));

// Defining and Storing session
app.use(session({
    secret: 'This is my secret',
    resave: false,
    saveUninitialized: false,
    store: store
}));


// Need to registered the dummy user to the req object so that we can access it from anywhere
// inside our program.

// Midleware does not execute when the program first runs they are registered in node and funneled
// through the incomming request.
app.use((req, res, next) => {
    // To find user of this session
    User.findById('6211efdade14ff94232ac6d1')
        .then((user) => {

            // Registering the mongoose user obj to the req, so that we can use it all over our app
            req.user = user;
            next();
        })
        .catch(error => console.log(error));
})
app.use(publicRoute);
app.use('/admin', adminRoute);
app.use(authorizationRoute);
app.use(errorController)


// Setting the relationship.
mongoose.connect(uri)
    .then(result => {
        return User.findOne()

    })
    .then(user => {
        if (!user) {
            return User.create({
                name: "Anubhav Shukla",
                email: "anubhavshukla@gmail.com",
                cart: { items: [] }
            })
        }
        return user
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is listening on ${port}`);
        })
    })
    .catch(error => console.log(error));


