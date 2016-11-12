'use strict';

var RestifyRouter = require('restify-routing');

var renewRouter = new RestifyRouter();

renewRouter.get('/', function(req, res, next){
  var message = 'renewRouter.post success';
  console.log(message);
  res.send(200, message);
});


module.exports = renewRouter;