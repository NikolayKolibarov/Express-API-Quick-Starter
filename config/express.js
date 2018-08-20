const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const morgan = require('morgan')

module.exports = (config, app) => {
  app.use(morgan('dev'))
  app.set('views', config.rootPath + 'server/views')
  app.set('view engine', 'hbs')
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(session({ secret: 'nnk', saveUninitialized: false, resave: false }))
  app.use(passport.initialize())
  app.use(passport.session())

  app.use('/client', express.static(config.rootPath + '/client/'))
  app.use('/node_modules', express.static(config.rootPath + '/node_modules'))
  app.use('/bower_components', express.static(config.rootPath + '/bower_components'))
}
