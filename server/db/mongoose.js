const mongoose = require('mongoose');

mongoose.Promise = global.Promise;          //use built in promise in javascrpt
// mongoose.connect('mongodb://aditya:todoapp@ds151228.mlab.com:51228/todoapp');
mongoose.connect('mongodb://localhost:27017');

module.exports = { mongoose }