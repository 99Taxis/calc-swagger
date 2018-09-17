'use strict';


/**
 * Add a new CarCost
 * 
 *
 * body CarCost CarCost object that needs to be added in the database
 * no response value expected for this operation
 **/
exports.addCarCost = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find CarCost by id and delete
 * delete a CarCost
 *
 * returns List
 **/
exports.deleteCarCost = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "IPVA" : 1,
  "poupanca" : 5,
  "cityParams" : 3,
  "CRLV" : 7,
  "maintenceCost" : 6,
  "id" : 0,
  "carWash" : 9,
  "depreciation" : 5,
  "DPVAT" : 2
}, {
  "IPVA" : 1,
  "poupanca" : 5,
  "cityParams" : 3,
  "CRLV" : 7,
  "maintenceCost" : 6,
  "id" : 0,
  "carWash" : 9,
  "depreciation" : 5,
  "DPVAT" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all CarCost
 * return all CarCost items
 *
 * returns List
 **/
exports.getCarCost = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "total" : 7,
  "washCost" : 5,
  "fixedCost" : 6,
  "maintenceCost" : 2,
  "id" : 0,
  "parkingCost" : 5,
  "fuelCost" : 1
}, {
  "total" : 7,
  "washCost" : 5,
  "fixedCost" : 6,
  "maintenceCost" : 2,
  "id" : 0,
  "parkingCost" : 5,
  "fuelCost" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing CarCost
 * 
 *
 * body CarCost CarCost object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateCarCost = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

