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

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID("5ab796621b4822427a5bcccb")
    // }, {
    //     $set:{
    //         completed:true
    //     }
    // },{ 
    //     returnOriginal:false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        name:"aditya"
    },{
        $set:{
            name:"Rian"
        },
        $inc:{
            age:+1
        }
    },{
        returnOriginal:false
    }).then((result) => {
        console.log("successfully deleted");
        console.log(result);
    })
    // database.close();
});