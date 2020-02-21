const mongoose = require('mongoose');

module.exports = function() {
    let connOptions = {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify:false};
    mongoose.connect(process.env.DB_URL, connOptions, (err)=>{
        if(err) console.log(err)
        else console.log('Connected to DB...');
    });
    mongoose.set('useCreateIndex', true);
}