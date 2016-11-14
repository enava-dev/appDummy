'use strict';

var RestifyRouter = require('restify-routing');
var authValidate = require('../../middlewares/validate/internalApi/authValidate');
var authController = require('../../../app/controller/auth/authController');

var authRouter = new RestifyRouter();

authRouter.post('/auth', authValidate.create, authController.create);
authRouter.get('/auth/renew', authValidate.renew, authController.renew);






// authRouter.post({
//     url: '/auth', 
//     validation: authValidate.create 
//   },
//   authController.create
// );


// authRouter.get({
//     url: '/auth/renew', 
//     validation: authValidate.renew 
//   },
//   authController.create
// );

module.exports = authRouter; 