'use strict';

var express = require('express'),
    studentRouter = require('./studentRouter'),
    authRouter = express.Router();


authRouter.post('/auth', function(req, res){
  console.log('post /auth');
  res.send('auth success');
});


authRouter.get('/auth/renew', function(req, res){
  console.log('get /auth/renew');
  res.send('auth success');
});

authRouter.use('/auth', studentRouter);

module.exports = authRouter;