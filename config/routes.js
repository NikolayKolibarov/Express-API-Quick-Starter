const users = require('../users/users-routes')

module.exports = (app, env) => {
  app.use('/api/v1/users', users)
}
