'use strict';
const express = require('express');
const userRt = express();

const AutomakerController = require('../controllers/automakerController');

userRt.get('/automaker', async (req, res) => AutomakerController.post(req, res));
// userRt.post('/v1/users', UserCtrl.post);
// userRt.put('/v1/users/:_id', UserCtrl.putOne);
// userRt.delete('/v1/users/:_id', UserCtrl.deleteOne);

module.exports = userRt;
