const express = require('express');
const bodyParser = require('body-parser');

// ** All the routes are defined in sepetate files
const publicRoute = require('./routes/shop')
const adminRoute = require('./routes/admin');
const errorController = require('./controls/error')

const app = express();

// Setting view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.use(publicRoute);
app.use('/admin', adminRoute);
app.use(errorController)

app.listen(port, () => {
    console.log(`Server is listning on port : ${port}`);
})