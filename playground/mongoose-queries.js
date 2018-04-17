const {ObjectID} = require('mongodb');

const {mongooose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');

let id = '5ad319bea8b7aa1472f80db611';    

if(!ObjectID.isValid(id)){
    return console.log("id not valid");
}

 Todo.find({
     _id: id
 }).then((todos) => {
    console.log("todos",todos);
 });

 Todo.findOne({
    _id: id
}).then((todo) => {
   console.log("todo",todo);
});

Todo.remove({}).then((result) => {
console.log(result);
});

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()


Todo.findById(id).then((todo) => {
    if (!todo){
        return console.log("id not found");
    }
    console.log("todo by id",todo);
 }).catch((err) => {
    console.log(err);
 })