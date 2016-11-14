'use strict';

var RestifyRouter = require('restify-routing'),
    internalApiRouter = require('./internalApi/internalApiRouter'),
    publicApiRouter = require('./publicApi/publicApiRouter');

var rootRouter = new RestifyRouter();

rootRouter.use('/api/v1', publicApiRouter);
rootRouter.use('/internal/api/v1', internalApiRouter);

module.exports = rootRouter;