const mongoose = require('mongoose');
//define the mongodb connection url 
const mongodbURL = 'mongodb://localhost:27017/hotals';
// set up mongodb connection
mongoose.connect(mongodbURL);
// get the default connection 
// mongoose maintains a default connection object representing the mongodb connections
const db = mongoose.connection;
// define event listeners for databases connection
db.on('connected' , ()=>{
  console.log("connected to mongodb server")
});

db.on('error' , (err)=>{
  console.error("error to MongoDB server" , err);
});
db.on('disconnected' , ()=>{
  console.log("disconnected to mongodb server");
});

// exprot the databases connection

module.exports = db;