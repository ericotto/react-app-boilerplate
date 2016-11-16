'use strict'

var jwtStrategy = require('passport-jwt').Strategy;
var extractJwt = require('passport-jwt').ExtractJwt;
var User = require('../models/userSchema');
var config = require('../../config');

module.exports = function(passport) {
  var opts = {
    jwtFromRequest: extractJwt.fromAuthHeader(),
    secretOrKey: config.secret
  };
  passport.use(new jwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({
      id: jwt_payload.id
    }, function(err, user) {
      if (err) {
        return done(err, false);
      } else if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};
