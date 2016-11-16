'use strict';

var express = require('express'),
    rootRouter = express.Router(),
    routes = require('./routes'),
    internalApiRouter = require('./internalApi/internalApiRouter'),
    publicApiRouter = require('./publicApi/publicApiRouter');



rootRouter.use(internalApiRouter);
rootRouter.use(publicApiRouter);
// rootRouter.use('/routes', routes);



module.exports = rootRouter;