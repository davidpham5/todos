// start connecting to the DB

const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // return prevents from the success console log from running (if error is true)
       return console.log('unable to connect to server');
    }
    console.log('Connected to MongoDB server');
    // delete many
    // db.collection('Todos').deleteMany({text: 'something to do'}).then( (result) => {
    //     // success
    //     console.log('result: ', result);
    // })
    // delete one
    // db.collection('Todos').deleteOne({text: 'something to do'}).then( (result) => {
    //     // success
    //     console.log('result: ', result);
    // })
    // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
    //     // success
    //     console.log('result: ', result);
    // })

    // db.collection('Users').deleteMany({
    //     name: 'David'
    // }).then( (result) => {
    //     console.log('result: ', result);
    // });
    
    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectId("59c0724905ad1aedb2b78e66")
    // }).then( (result) => {
    //     console.log('result: ', JSON.stringify(result, undefined, 2));
    // });

    // db.collection('Users').deleteOne({
    //         name: 'Leo'
    //     }).then( (result) => {
    //         console.log('result: ', JSON.stringify(result, undefined, 2));
    //     });
    // db.close();
});

