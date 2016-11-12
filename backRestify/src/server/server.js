'use strict';

var restify = require('restify');
var RestifyRouter = require('restify-routing');
var rootRouter = require('./routes/root.router');
var listRestEndpoints = require('./listRestEndpoints');

var server = restify.createServer({
  serverName: "Test restify-routing",
  serverVersion: '0.0.1'
});


server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());





// server.all('/*', function(req, res, next) {
//   // CORS headers
//   res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   // Set custom headers for CORS
//   res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
//   if (req.method == 'OPTIONS') {
//     res.status(200).end();
//   } else {
//     next();
//   }
// });


// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you 
// are sure that authentication is not needed
// server.all('/api/v1/*', [require('./middlewares/validateRequest')]);


// Load all the routes
rootRouter.applyRoutes(server);


// Start the server
server.listen(8080, function() {
  console.log('Restify server listening on port ' + server.address().port);
  console.log(server.name, 'listening at', server.url);
  // console.log('server:', server);
  console.log('server.domian:', server.domain);
  console.log('server.name:', server.name);
  // console.log('server.router:', server.router);
  console.log('server.routes:', server.routes);
  console.log('server.acceptable:', server.acceptable);
  console.log(server.router.mounts);

  listRestEndpoints(server.router.mounts);

});


module.exports = server;
