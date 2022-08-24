'use strict';
const userRt = require('express').Router();

// const { UserCtrl } = require('../controllers');

userRt.get('/gui', () => console.log('CHAMOUUU'));
// userRt.get('/v1/users/:_id', UserCtrl.getOne);
// userRt.get('/v1/users', UserCtrl.getMany);
// userRt.post('/v1/users', UserCtrl.post);
// userRt.put('/v1/users/:_id', UserCtrl.putOne);
// userRt.delete('/v1/users/:_id', UserCtrl.deleteOne);

module.exports = userRt;
