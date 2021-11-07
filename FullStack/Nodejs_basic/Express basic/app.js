// All our server logic.

const express = require('express');

// All our created routes
const adminRouter = require('./routes/add-product');
const publicRoter = require('./routes/shop');
const invalidPage = require('./routes/404');

const app = express();

const port = 3000;

app.use(publicRoter);
app.use('/admin', adminRouter);

// When all routes fail only then it will come to this route
app.use(invalidPage);

app.listen(port, () => {
    console.log(`Server is listning on port ${port}`);
})

// This line is equal to :
// const server = http.createServer(app);

// server.listen(port, () => {
//     console.log(`Server is listning on port : ${port}`);
// })

