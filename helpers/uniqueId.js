const Counter = require('../models/counter');

// counters collection has a single counter => can fetched by findOne() without specifying any criteria
module.exports = async function() {
  try {
    let counter = await Counter.findOne({});
    await Counter.findOneAndUpdate({}, {$set:{count:counter.count+1}});
    return toBase62(counter.count);
  } 
  catch(err) {
       console.log(err);
  }
}

// BASE-62 Unique Id
function toBase62(num) {
    const exp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let str='';
    while(num>0) {
        let rem= num%62;
        str+= exp[rem]==0 ? '0':exp[rem.toString()];
        num= parseInt(num/62);
    }
    return str;
}