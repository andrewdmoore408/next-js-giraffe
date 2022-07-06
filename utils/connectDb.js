import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGO_SRV
// const { MongoClient, ServerApiVersion } = require('mongodb');

// const connection = {};

// Connect to database
async function connectDB() {
  // If there is already a connection to db, just return
  // No need to make a new connection
  // if (connection.isConnected) {
  //   // Use existing database connection
  //   console.log('Using existing connection');
  //   return;
  // }
  // Use new database connection when connecting for 1st time
  // 1st arg is the mongo-srv path that mongo generated for our db cluster
  // The 2nd arg is options object. Theses are deprecation warnings
  // mongoose.connect() returns a promise
  // What we get back from this is a reference to our database
//   const db = await mongoose.connect(process.env.MONGO_SRV, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   });
//   console.log('DB Connected');
//   connection.isConnected = db.connections[0].readyState;
// }

  // const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  // client.connect(err => {
  //   const collection = client.db("nextJS").collection("product");
    // perform actions on the collection object
    // client.close();
  // });

  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`in utils/connectDb.js: Database connected successfully`))
    .catch((err) => console.log('err in utils/connectDb.js: ', err));

  // mongoose.Promise = global.Promise;
}

// let cached = global.mongoose

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null }
// }

// async function connectDB () {
//   if (cached.conn) {
//     return cached.conn
//   }

//   if (!cached.promise) {
//     const opts = {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       bufferCommands: false,
//     }

//     cached.promise = mongoose.connect(MONGODB_URI, opts).then(mongoose => {
//       return mongoose
//     })
//   }
//   cached.conn = await cached.promise
//   return cached.conn
// }

export default connectDB;


// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const apiRoutes = require("./routes/api");
// const uiRoutes = require("./routes/ui");
// require("dotenv").config();

// const app = express();

// const port = process.env.PORT || 5001;

// mongoose
//   .connect(process.env.DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => console.log(`Database connected successfully`))
//   .catch((err) => console.log(err));

// mongoose.Promise = global.Promise;

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

// app.use(express.static(__dirname + "/public"));

// app.use(bodyParser.json());

// app.use("/api", apiRoutes);
// app.use("/ui", uiRoutes);

// app.use((err, req, res, next) => {
//   console.log(err);
//   next();
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
