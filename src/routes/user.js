'use strict';

var express = require('express');
var userRoute = express.Router();
var User = require('../models/userSchema');
var jwt = require('jsonwebtoken');
var passport = require('passport');
var config = require('../../config');
var cookieParser = require('cookie-parser');

var createToken = function(userObj) {
  var userSignObj = {
    username: userObj.username,
  }
  var token = jwt.sign(userSignObj, config.secret, config.jwtOpts);
  return token;
}

userRoute.get('/', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
  res.status(200).send(req.user);
});

userRoute.post('/login', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.json({success: false, message: "No such user"});
    } else {
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          var token = createToken(user);
          res.cookie('jwt', token, config.cookieOpts);
          res.status(200).send({success: true, token: token});
        } else {
          res.json({success: false, message: "Password doesn't match"});
        }
      })
    }
  });
});

userRoute.post('/logout', passport.authenticate('jwt', {
  session: false
}), function(req, res) {
  res.clearCookie('jwt');
  res.status(200).send({success: true, message: "Success"});
});

userRoute.post('/create', function(req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({success: false, message: "Please enter username and password."});
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, message: "Username already exists."});
      };
      var token = createToken(newUser);
      res.cookie('jwt', token, config.cookieOpts);
      res.status(200).send({success: true, token: token});
      console.log("User " + newUser.username + " saved");
    });
  }
});

module.exports = userRoute;
