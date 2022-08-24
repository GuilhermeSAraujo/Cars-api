'use strict';
const express = require('express');
const userRt = express();

// const { UserCtrl } = require('../controllers');

userRt.get('/fabricante/:_id/modelos', () => console.log('CHAMOUUU'));
// userRt.post('/v1/users', UserCtrl.post);
// userRt.put('/v1/users/:_id', UserCtrl.putOne);
// userRt.delete('/v1/users/:_id', UserCtrl.deleteOne);

module.exports = userRt;
