'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  "name": {
    "type": "String",
    "required": true,
    "minLength": 3
  },
  "age": {
    "type": "Number",
    "min": 13
  },
  "email": {
    "type": "String",
    "unique": true
  },
  "created": {
    "type": "Date"
  },
  "updated": {
    "type": "Date"
  }
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
