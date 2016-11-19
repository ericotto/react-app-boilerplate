'use strict'

// dependencies
var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var api = require('./src/routes/api.js');
var passport = require('passport');
var cookieParser = require('cookie-parser');


// server config
var PORT = process.env.PORT || 8080;
mongoose.connect(config.database);
app.use(passport.initialize());
require('./src/auth/passport')(passport);
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// routes
app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/api', api);
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// server
app.listen(PORT);
console.log('Running on port: ' + PORT);
