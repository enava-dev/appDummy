'use strict';

var express = require('express'),
    router = express.Router(),
    auth = require('../../app/controller/auth.controller'),
    product = require('../../app/controller/product.controller');



// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
});






/*
* Routes that can be accessed by any one
*/
router.post('/login', auth.login);
/*


* Routes that can be accessed only by autheticated users
*/
router
  .get('/product', product.getAll)
  .get('/product/:id', product.getOne)
  .post('/product/', product.create)
  .put('/product/:id', product.update);
// router.delete('/api/v1/product/:id', product.delete);





/*
* Routes that can be accessed only by authenticated & authorized users
*/
// router.get('/api/v1/admin/users', user.getAll);
// router.get('/api/v1/admin/user/:id', user.getOne);
// router.post('/api/v1/admin/user/', user.create);
// router.put('/api/v1/admin/user/:id', user.update);
// router.delete('/api/v1/admin/user/:id', user.delete);

module.exports = router;

