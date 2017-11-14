// start connecting to the DB

// es6 object destructioning: pull out object's property and make it a variable
var user = {
    name: 'David',
    age: 33
}
// object destruction
var {name} = user;
//console.log(name);

// look for mongo client
//const MongoClient = require('mongodb').MongoClient;
// same as above
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
// random object id
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // return prevents from the success console log from running (if error is true)
       return console.log('unable to connect to server');
    }
    console.log('Connected to MongoDB server');
    // no command to create todos. our method does that automtically
    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert todo', error);
    //     }
    //     // Success
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    
    // insert new doc into Users collection (name, age, location)
    db.collection('Users').insertOne({
        name: 'Leo',
        age: 8,
        location: 'Silver Spring'
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert User', error);
        }
        // Success
       // console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'David',
        age: 33,
        location: 'Silver Spring'
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert User', error);
        }
        // Success
       // console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    // close connection
    db.close();
});

