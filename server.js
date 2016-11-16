'use strict'

// dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var api = require('./src/routes/api.js');
var passport = require('passport');


// server config
var PORT = process.env.PORT || 8080;
mongoose.connect(config.database);
app.use(passport.initialize());
require('./src/auth/passport')(passport);

// url params
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// routes
app.get('/', function(req, res) {
  res.send('Hello, friend');
});
app.use('/api', api);

// server
app.listen(PORT);
console.log('Running on port: ' + PORT);
