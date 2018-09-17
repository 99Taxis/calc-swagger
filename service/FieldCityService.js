'use strict';


/**
 * Add a new FieldCity
 * 
 *
 * body FieldCity FieldCity object that needs to be added in the database
 * no response value expected for this operation
 **/
exports.addFieldCity = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find FieldCity by id and delete
 * delete a FieldCity
 *
 * returns List
 **/
exports.deleteFieldCity = function() {
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
 * get all FieldCity
 * return all FieldCity items
 *
 * returns List
 **/
exports.getFieldCity = function() {
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
 * Update an existing FieldCity
 * 
 *
 * body FieldCity FieldCity object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateFieldCity = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

