'use strict';

var express = require('express');
var api = express.Router();
var User = require('../models/userSchema');
var userRoute = require('./user');
var passport = require('passport');
var jwt = require('jsonwebtoken');

// authorization example
api.get('/exampleauth', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
  res.send({success: true, message: 'You may enter.'});
});

api.use('/user', userRoute);

module.exports = api;
