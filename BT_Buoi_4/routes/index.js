const main = require('./dashboard')
const pages = require('./pages')

function route(app) {
  app.use('/', main)
  app.use('/pages', pages)
    
}

module.exports = route;