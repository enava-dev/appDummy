'use strict';

var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    routes = require('./routes/routes'),
    rootRouter = require('./routes/rootRouter'),
    listEndpoints = require('./listEndpoints'),
    internalApiRouter = require('./routes/internalApi/internalApiRouter'),
    publicApiRouter = require('./routes/publicApi/publicApiRouter');

var app = express();

app.use(logger('dev'));

app.use(bodyParser.json());

app.all('/*', function(req, res, next) {
  // CORS headers
  res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});


// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you 
// are sure that authentication is not needed
// app.all('/api/v1/*', [require('./middlewares/validateRequest')]);




// Load all the routes
// app.use('/', routes);
// app.use('/routes/test', routes);
// app.use('/api/v1/', routes);
// app.use('/api/private/v1');
// app.use('/', rootRouter);


// app.use(rootRouter);
app.use(internalApiRouter);
app.use(publicApiRouter);


// app.get('/app/item', function(req, res){
//   console.log('app/item');
//   res.end('app/item');
// });


// Start the server
app.set('port', process.env.PORT || 8080);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);



   console.log(server.name, 'listening at', server.url);
  // console.log('server:', server);
  console.log('server.domian:', server.domain);
  console.log('server.name:', server.name);
  // console.log('server.router:', server.router);
  console.log('server.routes:', server.routes);
  console.log('server.acceptable:', server.acceptable);

   listEndpoints(app);


});
