// start connecting to the DB

const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // return prevents from the success console log from running (if error is true)
       return console.log('unable to connect to server');
    }
    console.log('Connected to MongoDB server');
    
    // toArray() returns a promise
    // db.collection('Users').find().toArray().then((docs) => {
    //     console.log('Users: ', JSON.stringify(docs), undefined, 2);
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });

    // query todos with completed: false
    // db.collection('Todos').find({ completed: false }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });
    // db.collection('Todos').find({ 
    //     _id: new ObjectId("59c06d032d8cec38f679f25e")
    // }).toArray().then((docs) => {
    //     console.log('Todos: ', JSON.stringify(docs, undefined, 2));
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });

    db.collection('Users').find({
        name: 'Leo'
    }).toArray().then( (docs) => {
        console.log('Users: ', JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log('didnt find user', error);
    } )
    
    db.close();
});

