// MODULES
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const dbConnect = require('./dbConnect');
const CacheConnect = require('./cacheConnect');

// SERVER CONFIG
const app = express();
app.use(bodyParser.json());

// DBCONNECT
dbConnect();

// CacheCONNECT
CacheConnect();


// ROUTERS
const shortenUrlRouter = require('./routes/shorten');
const getShortUrlRouter = require('./routes/getshortUrl');
const userRouter = require('./routes/user');

// ROUTES
app.use('/url/shorten', shortenUrlRouter);
app.use('/', getShortUrlRouter);
app.use('/user', userRouter);

// SERVER START
app.listen(process.env.PORT, ()=>console.log(`Listening on port ${process.env.PORT}...`));