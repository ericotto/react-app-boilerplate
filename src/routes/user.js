'use strict';

var express = require('express');
var userRoute = express.Router();
var User = require('../models/userSchema');
var jwt = require('jsonwebtoken');
var config = require('../../config');

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
        return res.json({success: false, message: "Username already exits."});
      };
      res.json({success: true, message: "Successfully created."});
      console.log("User " + newUser.username + " saved");
    });
  }
});

userRoute.post('/auth', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;
    if (!user) {
      res.json({success: false, message: "No such user"});
    } else {
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
          var token = jwt.sign(user, config.secret, {
            expiresIn: 60 * 60
          });
          res.json({success: true, message: "Authentication successful.", token: token});
        } else {
          res.json({success: false, message: "Password don't match"});
        }
      })
    }
  });
});

module.exports = userRoute;
