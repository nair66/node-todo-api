let mongoose = require('mongoose');

let Users = mongoose.model('Users', {
    email:{
        required:true,
        type:String,
        trim:true,
        minlength:1
    }
});

module.exports = { Users };