'use strict';

var RestifyRouter = require('restify-routing');
var authRouter = require('./../../app/controller/auth/auth.controller');
var renewRouter = require('./../../app/controller/auth/renew/renew.controller');

var internalApiRouter = new RestifyRouter();

authRouter.use('/renew', renewRouter);
internalApiRouter.use('/auth', authRouter);


// internalApiRouter.get('/', function(req, res){
//   var message = 'hello from internal api router'; 
//   res.send(200, message);
// });


module.exports = internalApiRouter;