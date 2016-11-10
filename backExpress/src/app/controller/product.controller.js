'use strict';

var productController = {
  getAll: getAll,
  getOne: getOne,
  create: create,
  update: update,
  delete: deletee,
};


function getAll(req, res){
  res.send('getAll');
};

function getOne(req, res){
  res.send('getOne');
};

function create(req, res){
  res.send('create');
};

function update(req, res){
  res.send('update');
};

function deletee(req, res){
  res.send('delete');
};

module.exports = productController;