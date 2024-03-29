const request = require('supertest');
const expect = require('expect');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/Todo');

const todos = [{
    _id: new ObjectID(),
    text:"give milk to cat for breakfast"
},{
    _id:new ObjectID(),
    text:"give milk to cat for lunch"
},{
    _id:new ObjectID(),
    text:"give milk to cat for dinner"
}]

beforeEach((done) => {
    Todo.remove({}).then(() => {
         return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos',() => {
    it('should create a new todo',(done) => {
        let text = 'Test todo text';

        request(app)
        .post('/todos')
        .send({text})    
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err,res) => {
            if(err) {
               return done(err);
            }

            Todo.find({text}).then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((err) => done(err));
        });
    });
    it('should not create todo with invalid body data',(done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res) => {
            if(err){
                return done(err);
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(3);
                done();
            }).catch((err) => done(err));
        });
    });
});

describe('GET /todos',() => {
    it('should get all todos' ,(done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(3);
        }).end(done);
    })
});


describe('GET /todos/:todoid',() => {
    it('should return todo doc',(done) => {
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(todos[0].text);
        })
        .end(done);
    })
});
