const { sortedIndexOf, uniq } = require('lodash');
const mongoose = require('mongoose');

// define the person schema 
const personSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    unique:true
  },
  age:{
    tyep:Number
  }, 
  work:{
    type:String,
    enum:['chef' , 'manager' , 'waiter'],
    required:true
  },
  mobile:{
    type:Number,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  address:{
    type:String,
  },
  salary:{
    type:Number,
    required:true
  }
});

// create Person model

const Person = mongoose.model('Person' , personSchema);
module.exports = Person;