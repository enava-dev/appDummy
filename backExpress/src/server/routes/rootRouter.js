'use strict';

var express = require('express'),
    rootRouter = express.Router(),
    internalApiRouter = require('./internalApi/internalApiRouter'),
    publicApiRouter = require('./publicApi/publicApiRouter');


rootRouter.use('internal/api/v1', internalApiRouter);
rootRouter.use('/api/v1', publicApiRouter);


module.exports = rootRouter;