const express = require('express');
const bodyparser = require('body-parser');
const {ObjectID} = require('mongodb');
 
let app = express();
app.use(bodyparser.json());


const port = process.env.PORT || 3000;


let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/Todo');
let {Users} = require('./models/Users');

app.post('/todos',(req, res) => {
    let todo = new Todo({
        text:req.body.text
    });

    todo.save().then((doc) => {
        console.log("received data from client");
        res.send(doc);
        console.log("updations made to database");
    },(err)=> {
        res.status(400).send(err);
    });
});

app.get('/todos',(req,res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    },(err) => {
        res.status(400).send(err);
    })
});

app.get('/todos/:todoid',(req, res) => {
    let id = req.params.todoid;
    console.log("received id: ",id);
    if(!ObjectID.isValid(id))
    {
        res.status(400).send("invalid id");
    } 
        Todo.findById(id).then((foundTodo) => {
            if(!foundTodo)
            res.status(404).send("no todos found with matching id");
            
            res.send(foundTodo);
        }).catch((err) => {
            res.send(err);
        })

});

app.listen(port ,() => {
    console.log(`server up on port ${port}`)
});


module.exports = {app};

// let newUser = new Users({
//     email:'adityastorm@gmail.com',
// });

// newUser.save().then((doc) => {
//     console.log("saved user");
//     console.log(doc);
// },(err) =>{
//     console.log("unable to store or validation failed");
// });

// let newTodo = new Todo({
//     text:"cook dinner"
// });

// newTodo.save().then((doc) => {
//     console.log("saved todo");
//     console.log(doc);
// }, (error) => {
//     console.log("unable to save todo");
// });

// let otherTodo = new Todo({
//     text:"cook breakfast",
//     completed:false,
//     completedAt:25
// });

// otherTodo.save().then((doc) => {
//     console.log("saved todo");
//     console.log(doc);
// }, (error) => {
//     console.log("unable to save todo");
// });