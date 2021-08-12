const mongoose = require('mongoose');

connectionStr = ''
mongoose.Promise = global.Promise;          //use built in promise in javascrpt
mongoose.connect(connectionStr);


module.exports = { mongoose }
