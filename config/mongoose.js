const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ashvaryak2552:Hospital@cluster0.pbcxgtq.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to the db'));
db.once('open',function(){
    console.log("SUCCESSFULLY CONNECTED TO THE DATABASE");

});
module.exports = db;
