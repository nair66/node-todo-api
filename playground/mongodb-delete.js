// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017',(err, database) => {

    if(err){
       return console.log('unable to connect to mongo',err);
    }

    let db = database.db('TodoApp');
    console.log('connected to MongoDB server');

    //deleteMany
    //deleteOne
    //findOneAndDelete   delete and get back the todo which got deleted
        

    // db.collection('Todos').deleteMany({
    // text:"Eat Lunch"
    // }).then((result)=> {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({
    //     text:"Eat lunch"
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Todos').findOneAndDelete({
        completed:false
    }).then((result) => {
        console.log(result);
    });
    // database.close();
});