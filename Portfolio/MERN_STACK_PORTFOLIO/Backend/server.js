const express = require('express');
require('dotenv').config();
const userRoute = require('./routes/userRoute');
const connectToDatabase = require('./Database/database')
const app = express();

// Should be use so that we can read the json data from the body.
app.use(express.json());

app.use(userRoute);

const PORT = process.env.PORT || 3001;

// Server will start only if the we have been successfully connected to the server

connectToDatabase
    .then((data) => {
        console.log(`Connected to database ${data.connection.host}`);
        app.listen(PORT, () => {
            console.log(`Server is listening on ${PORT}`);
        })
    })
    .catch(err => {
        console.log(err);
    });