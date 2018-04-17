// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017',(err, database) => {
    
    let db = database.db('TodoApp');
    if(err){
       return console.log('unable to connect to mongo',err);
    }
    console.log('connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log("unable to perform insertion on Todos",err);
    //     }
    //         console.log('inserted : ');
    //     console.log(JSON.stringify(result.ops , undefined, 2));
    // }); 

    // db.collection('Users').insertOne({
    //     name:"aditya",
    //     age:21,
    //     location:"unknown"
    // },(err, result) => {
    //     if(err){
    //         return console.log('unable to perform insertion on Users',err);
    //     }
    //     console.log('inserted :');
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    database.close();
});