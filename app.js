// MODULES
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./dbConnect');

// SERVER CONFIG
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.json());

// DBCONNECT
dbConnect();

// ROUTERS
const shortenUrlRouter = require('./routes/shorten');
const getShortUrlRouter = require('./routes/getshortUrl');
const userRouter = require('./routes/user');

// ROUTES
app.use('/', getShortUrlRouter);
app.use('/user', userRouter);
app.use('/url/shorten', shortenUrlRouter);


// SERVER START
app.listen(process.env.PORT, ()=>console.log(`Listening on port ${process.env.PORT}...`));