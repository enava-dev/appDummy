'use strict';

var authController = {
  create: create,
  renew: renew
};


function create(req, res, next){
  console.log('authController');
  var message = 'create success';
  console.log(message);
  res.send(200, message);
}


function renew(req, res, next){
  console.log('authController');
  var message = 'renew success'
  console.log(message);
  res.send(200, message);
}



module.exports = authController;