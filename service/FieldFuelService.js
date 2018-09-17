'use strict';


/**
 * Add a new FieldFuel
 * 
 *
 * body FieldFuel FieldFuel object that needs to be added in the database
 * no response value expected for this operation
 **/
exports.addFieldFuel = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find FieldFuel by id and delete
 * delete a FieldFuel
 *
 * returns List
 **/
exports.deleteFieldFuel = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description"
}, {
  "description" : "description"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all FieldFuel
 * return all FieldFuel items
 *
 * returns List
 **/
exports.getFieldFuel = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description"
}, {
  "description" : "description"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing FieldFuel
 * 
 *
 * body FieldFuel FieldFuel object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateFieldFuel = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

