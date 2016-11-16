'use strict';

var express = require('express'),
    studentRouter = express.Router();


studentRouter.post('/student', function(req, res){
  console.log('post /student');
  res.send('student success');
});


studentRouter.get('/student/id', function(req, res){
  console.log('get /student/id');
  res.send('student success');
});

module.exports = studentRouter;