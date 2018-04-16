const mongoose = require('mongoose');

mongoose.Promise = global.Promise;          //use built in promise in javascrpt
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose }