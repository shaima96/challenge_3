const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rbk', { useNewUrlParser: true });


var db = mongoose.connection

db.on('error', console.error.bind(console, 'connect error:'));
db.once('open', function () {
  console.log('connect success');
})




let firstFormSchema = mongoose.Schema({
    // TODO: your schema here!
    name: String,
    email: String,
    password: String,
  });

let secondFormSchema = mongoose.Schema({
    // TODO: your schema here!
    line1: String,
    line2: String,
    city: String,
    state: String,
    code: Number,
  });

let thirdFormSchema = mongoose.Schema({
    // TODO: your schema here!
    credit: Number,
    date: String,
  });


  let first = mongoose.model('first', firstFormSchema);
  let second = mongoose.model('second', secondFormSchema);
  let third = mongoose.model('third',thirdFormSchema);


module.exports.first=first;
module.exports.second=second;
module.exports.third=third;