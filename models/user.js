const mongoose = require('mongoose');

let userSchema  = new mongoose.Schema({
    username:{
        type:String, 
        required:true, 
        unique:true,
        match:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
    },
    password:{type:String, required:true}
})

let User = mongoose.model('User',userSchema);

module.exports = User;