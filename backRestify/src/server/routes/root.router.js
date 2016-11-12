'use strict';

var RestifyRouter = require('restify-routing'),
    internalApiRouter = require('./internalApi.router'),
    publicApiRouter = require('./publicApi.router');

var rootRouter = new RestifyRouter();

rootRouter.use('/api/v1', publicApiRouter);
rootRouter.use('/internal/api/v1', internalApiRouter);

module.exports = rootRouter;