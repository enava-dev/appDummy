'use strict';

var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

var app = express();

// app.use(logger('dev'));

function test(data, cb){
  console.log('data:', data);
  return cb(null, 'success');
}

test('emmanuel', function(err, response){
  console.log(response);
});

test('life code', (err, response) => {
  console.log('new function');
  console.log('response:', response);
});