'use strict';

var express = require('express'),
    internalApiRouter = express.Router(),
    authRouter = require('./authRouter');


var url = '/internal/api/v1';

internalApiRouter.all( url+'/*', function(req, res, next){
    console.log(' $$$$$$$ internal API middleware  $$$$$$$$$');
    next();
});


internalApiRouter.use(url, authRouter);

// internalApiRouter.post('/institute', function(req, res, next){
//     console.log('post institute');
//     res.send('post institute');
// });


// internalApiRouter.get('/institute', function(req, res, next){
//     console.log('get institute');
//     res.send('get institute');
// });

module.exports = internalApiRouter;