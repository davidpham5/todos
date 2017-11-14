var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/users');

var app = express();
var port = process.env.PORT || 3000;

// use middleware
app.use(bodyParser.json());

// Routes
app.post('/todos/', (req, resp) => {
    // console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        resp.send(doc);
    }, (error) => {
        resp.status(400).send(error);
    });
});

app.get('/todos', (req, resp) => {
    Todo.find().then((todos) => {
        resp.send({
            todos
        })
    }, (error) => {
        resp.status(400).send(error);
    })
});

// GET request /todos/:id
app.get('/todos/:id', (req, resp) => {
    // run server.js
    // in postman GET locahost:3000/todos/123
    // resp.send(req.params);

    var id = req.params.id;
    console.log('id: ', id);
    if (!ObjectID.isValid(id)) {
        console.log('ID is not valid');
        // respond with a 404
        return resp.status(404).send();
    } else {
        // findById
        // success
        Todo.findById(id).then((todo) => {
            if (!todo) {
                resp.status(404).send();
                return console.log('Todo does not exist'); 
            } else {
                console.log('todo by id', JSON.stringify(todo, undefined, 2));
                resp.send({todo: todo});
            }
        }).catch((error) => {
             // error
            resp.status(400).send();
        })
    }
});

app.listen(port, function() {
    //console.log('App listening on port 3000!');
    console.log(`started up at port ${port}`);
});

module.exports = {
    app
};
// new todo
// var todo1 = new Todo({
//     text: 'cook dinner'
// });

// save to db
// todo1.save().then( (doc) => {
//     console.log('save todo', doc);
// }, (error) => {
//     console.log('unable to save todo', error);
// });

// var todo2 = new Todo({
//     _id: new ObjectID(),
//     text: 'cuddle with Sara',
//     completed: true,
//     completedAt: 2
// });

// var todo2 = new Todo({
//     text: ' cuddle with Sara '
// });

// todo2.save().then( (doc) => {
//     console.log('save todo', JSON.stringify(doc, undefined, 2));
// }, (error) => {
//     console.log('unable to save todo', error);
// });


// var user1 = new User({
//     email: ' dpham@example.com '
// })

// user1.save().then( (doc) => {
//     console.log('saved user: ', JSON.stringify(doc, undefined, 2));
// }, (error) => {
//     console.log('unable to save user', error);
// })