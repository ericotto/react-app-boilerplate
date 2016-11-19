'use strict'

var jwtStrategy = require('passport-jwt').Strategy;
var extractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models/userSchema');
var config = require('../../config');
var cookieParser = require('cookie-parser');

module.exports = function(passport) {

  var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies) {
      token = req.cookies.jwt;
    }
    return token;
  }

  var opts = {
    jwtFromRequest: cookieExtractor,
    secretOrKey: config.secret
  }

  passport.use(new jwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({
      username: jwt_payload.username
    }, function(err, user) {
      if (err) {
        return done(err, false);
      } else if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }))

}
