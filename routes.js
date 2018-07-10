const routes = require('next-routes')

module.exports = routes()                          
.add('user', '/user/:id', '404')                // user   profile   /user/:id