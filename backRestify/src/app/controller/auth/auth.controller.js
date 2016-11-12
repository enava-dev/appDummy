'use strict';

var RestifyRouter = require('restify-routing');
var renewRouter = require('./renew/renew.controller');

var authRouter = new RestifyRouter();

authRouter.get('/', function(req, res, next ){
  var message = 'authRouter get /auth success';
  console.log(message);
  res.send(200, message);
});


// authRouter.get('/auth/renew', function(req, res, next){
//   var message = 'authRouter get /auth/renew';
//   console.log(message);
//   res.send(200, message);
// });


// authRouter.use('/auth', renewRouter);

module.exports = authRouter;