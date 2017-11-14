// start connecting to the DB

const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // return prevents from the success console log from running (if error is true)
       return console.log('unable to connect to server');
    }
    console.log('Connected to MongoDB server');
    // find one and udpate

    // db.collection('Todos').findOneAndUpdate({ _id: new ObjectId('59c06d032d8cec38f679f25e') }, {
    //     // update operators for mongo db
    //     $set: {
    //         completed: true,
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( (result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('59c1c5c438f75ef2e361397d')
    }, {
        // increment age by one
        $set: {
            name: 'Leo the Lion'
        },
        $inc: {
            age: 1
        }
    }).then( (result) => {
        console.log(result);
    })
     db.close();
});

