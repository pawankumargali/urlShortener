const mongoose = require('mongoose');

let urlSchema = new mongoose.Schema({
   _id:{type:String, required:true},
   longUrl:{type:String, required:true},
});

let Url = mongoose.model('Url', urlSchema);

module.exports = Url;