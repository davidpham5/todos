// For our invalid object id example, load in ObjectID
// more elegant way
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
// Challenge
const {User} = require('./../server/models/users');

var id = '59f5474c39a0b72f42ed6e96';
var user_id = '59c1d82ad46151a3fb249f3c';

// validate ID
if (!ObjectID.isValid(id)) {
    console.log('ID is not valid');
}
// validate user id
if ( !ObjectID.isValid(user_id) ) {
    console.log('User id is not valid');
}
// to run experiment
// `node todos/lab/mongodb-queries.js'
Todo.find({
    _id: id
}).then((todos => {
    console.log('todos: ', todos); 
    // so does this file know about todos or todo?
    // its because mongoose is doing the heavy lifting. It is taking the id we grabbed
    // and doing the transforming from string to object
    // and then mapping it.
}));

Todo.findOne({
    _id: id
}).then((todo  => {
    console.log('todo: ', todo );
}));

Todo.findById(id).then((todo) => {
    // if id doesnt exist or is wrong:
    if (!todo) {
        return console.log('id does not exist');
    }
    console.log('todo by id', todo);
    // how to validate an object id
    // what if the user adds an improper id?
    // catch error and log it out
}).catch( (error) => {
    console.log('error is ', error);
})

// Challenge: query user
User.find({
    _id: user_id
}).then( (users => {
    console.log('users', users);
}));

User.findById(user_id).then( (user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log('user by id', JSON.stringify(user, undefined, 2));
}).catch( (error) => {
    console.log('error is ', error);
})