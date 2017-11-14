const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');
const {app} = require('./../server');
const {Todo} = require('./../models/todos');

// Dummy todos for our GET method
// only need the text property because
// mongoose db will ppoulate the rest
const todos = [

    {
        _id: new ObjectID(),
        text: 'test todo text'
    },
    {
        _id: new ObjectID(),
        text: 'test todo text again'
    }
]

// Lifecycle Method
// make sure the debabase is empty
beforeEach((done) => {
    // Todo.remove({
    //     // wipe all todos with empty object 
    // }).then(() => done());

    // insertMany
    Todo.remove({
        // wipe all todos with empty object
    }).then( () => {
        return Todo.insertMany(todos);
    }).then( () => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        // dummy text
        var text = 'test todo text';
        
        request(app)
            .post('/todos')
            .send({
                text: text
            })
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((error, resp) => {
                if (error) {
                    return done(error);
                }

                Todo.find(text).then((todos) => {
                    expect(todos.length).toBe(3);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((error) => done(error));
            });
    });

    // verify a todo is not created when bad data is sent
    it('should not create todo wit invalid body data', (done) => {
        
        request(app)
            .post('/todos')
            .send({})// send an empty object
            .expect(400)
            .end((error, resp) => {
                if (error) {
                    return done(error)
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((error) => {
                    done(error);
                });
            });
    })
});


describe('GET /todos', () => {
    it('should get all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((resp) => {
                expect((resp.body.todos).length).toBe(2);
            })
            .end(done);
    })
})

describe('GET /todos/:id', () => {
    it('should return todo by id', (done) => {
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((resp) => {
            expect(resp.body.todo.text).toBe(todos[0].text)
        })
        .end(done);
    })
    it('should return 404 if todo is not found', (done) => {
        var id = new ObjectID().toHexString();
        request(app)
            .get(`/todos/${id}`)
            .expect(404)
            .end(done);
    });
    it('should return 404 for non-object ids', (done) => {
        var id = 123;
        request(app)
            .get(`/todos/${id}`)
            .expect(404)
            .end(done);
    })
})