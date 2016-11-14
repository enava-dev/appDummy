'use strict';

var RestifyRouter = require('restify-routing');
var authRouter = require('./authRouter');

var internalApiRouter = new RestifyRouter();

internalApiRouter.all('/*', function(req, res, next){
  console.log(' internal API middleware');
  next();
});



internalApiRouter.use('/', authRouter);



module.exports = internalApiRouter;