'use strict';

var RestifyRouter = require('restify-routing');

var publicApiRouter = new RestifyRouter();

publicApiRouter.get('/', function(req, res){
  var message = 'hello from public api router';
  res.send(200, message);
});

module.exports = publicApiRouter;