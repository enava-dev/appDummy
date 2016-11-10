'use strict';

var authController = {
  login: login
};

function login(req, res){
  console.log('authController');
  console.log('login');
  res.send('login sucess');
}


module.exports = authController;