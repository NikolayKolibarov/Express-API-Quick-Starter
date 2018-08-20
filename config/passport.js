const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('../config/config')
const User = require('../users/User')

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader('Authorization'),
  secretOrKey: config.jwtSecret
}

const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  User.findOne({ _id: payload.sub })
        .then((user, err, info) => {
          if (err) {
            return done(err, false)
          }
          if (user) {
            done(null, user)
          } else {
            done(null, false)
          }
        })
})
module.exports = () => {
  passport.use(jwtLogin)
}
