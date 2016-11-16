'use strict';

var express = require('express'),
    publicApiRouter = express.Router(),
    instituteRouter = require('./instituteRouter');


var url = '/api/v1';

publicApiRouter.all(url+'/*', function(req, res, next){
    console.log(' ############### public API middleware ########');
    next();
});





// publicApiRouter.post('/student', function(req, res, next){
//     console.log('post student');
//     res.send('post student');
// });


// publicApiRouter.get('/student', function(req, res, next){
//     console.log('get student');
//     res.send('get student');
// });


publicApiRouter.use(url, instituteRouter);

module.exports = publicApiRouter;