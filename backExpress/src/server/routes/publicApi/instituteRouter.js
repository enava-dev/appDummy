'use strict';

var express = require('express'),
    instituteRouter = express.Router();


instituteRouter.post('/institute', function(req, res){
  console.log('post /institute');
  res.send('institute success');
});


instituteRouter.get('/institute', function(req, res){
  console.log('get /institute');
  res.send('institute success');
});

module.exports = instituteRouter;