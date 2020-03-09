// IMPORT MODULES
require('dotenv').config();
const express = require('express');
const dbConnect = require('./dbConnect');

// IMPORT ROUTES
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const urlRouter = require('./routes/url');

// SERVER
const app = express();
app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}...`));

// DBCONNECT
dbConnect();

// APP MIDDLEWARE
app.use(express.json());

// ROUTES MIDDLEWARE
app.use('/', indexRouter);
app.use('/api/user', userRouter);
app.use('/api', urlRouter);