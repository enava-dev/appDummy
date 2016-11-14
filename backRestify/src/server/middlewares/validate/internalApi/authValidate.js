'use strict';

var authValidate = {};


authValidate.create = {
  resources: {},
  queries: {},
  content: {
    user: {
      isRequired: true,
    },
    password: {
      isRequired: true
    }
  }
};

// function create(req, res, next){
//   console.log('authValidate');
//   console.log('create success');
//   next();
// }


// function renew(req, res, next){
//   console.log('authValidate');
//   console.log('renew success');
//   next();
// }



module.exports = authValidate;