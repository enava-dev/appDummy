'use strict';

var expressListEndpoints = require('express-list-endpoints'),
    Table = require('cli-table');

var listEndpoints = function(app){

  var endpoints = expressListEndpoints(app);
  var table = new Table({ head: ["Method", "Path"] });
  console.log('\nAPI for this service \n');
  console.log('\n********************************************');
  console.log('\t\tEXPRESS');
  console.log('********************************************\n');

  endpoints.forEach(function(endpoint){
    if(endpoint.path != '/*'){
      endpoint.methods.forEach(function(method){
        var tmp = {};
        tmp[method] = [endpoint.path ]; 	
        table.push(tmp);
      });
    }
  });

  console.log(table.toString());
  return table;

}

module.exports = listEndpoints;

