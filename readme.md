# Todo API
This app explores Mongo DB and RoboMongo

# Getting Started
In our lab, we have a script, `monogodb-connect.js`. This script has our calls to monogo db. We can connect to mongo db and see our Uses collections and Todo collections. 

-  Download mongo db community version and rename it as Mongo
- make new directory, `mongo-data` that sits one level above the root of the app
- `monogo-data` will store our connection to the database
- move `mongo` directory to the same level as `mongo-data`
- change directory to mongo bin: `cd mongo/bin`
- From the terminal, connect mongo: `./mongod -- dbpath ~/<Project Directory>/<any subdirectories>/mongo-database`
- You should see a connection at port: ` waiting for connections on port 27017`

Now that you have a Mongo DB connected, you can run our script and observe RoboMongo reflect those database changes
