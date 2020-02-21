const mongoose = require('mongoose');

let Counter = mongoose.model('Counter', new mongoose.Schema({count:{type: Number, required:true} }));

module.exports=Counter;
