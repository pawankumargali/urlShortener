// MODULES
require('dotenv').config();
const express = require('express');
const dbConnect = require('./dbConnect');

// SERVER CONFIG
const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.json());

// DBCONNECT
dbConnect();

// ROUTERS
const indexRouter = require('./routes/indexRouter');
const userRouter = require('./routes/user');
const shortenUrlRouter = require('./routes/shorten');
const getShortUrlRouter = require('./routes/getshortUrl');

// ROUTES
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/url/shorten', shortenUrlRouter);
app.use('/',getShortUrlRouter);


// SERVER START
app.listen(process.env.PORT, ()=>console.log(`Listening on port ${process.env.PORT}...`));