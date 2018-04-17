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

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ab73ab2ad33204992cc7a97')
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // },(err) => {
    //     console.log("Unable to fetch Todos");
    // });

    db.collection('Todos').find({
            }).count().then((count) => {
        console.log("Todos count : ",count);
        
    },(err) => {
        console.log("Unable to fetch Todos");
    });
    db.collection('Users ').find({
        name:"aditya"
    }).count().then((count) => {
        console.log("docs count successfull");
        console.log("no of docs :",count);
    },(err) => {
        console.log("something went wrong");
    });
        
    // database.close();
});