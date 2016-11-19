'use strict';

var express = require('express');
var api = express.Router();
var User = require('../models/userSchema');
var userRoute = require('./user');
var passport = require('passport');
var jwt = require('jsonwebtoken');

api.get('/', function(req, res) {
  res.json({message: 'welcome to the API'});
});

api.use('/user', userRoute);

module.exports = api;
