'use strict';


/**
 * Add a new Gain
 * 
 *
 * body Gain Gain object that needs to be added in the database
 * no response value expected for this operation
 **/
exports.addGain = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find Gain by id and delete
 * delete a Gain
 *
 * returns List
 **/
exports.deleteGain = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "timeTax" : 5,
  "cityTax" : 5,
  "triggerSuperKM" : 2,
  "superKMTax" : 7,
  "baseTax" : 6,
  "distanceTax" : 1,
  "citySpeed" : 9,
  "id" : 0,
  "publicTranpPass" : 3,
  "cityId" : "cityId",
  "dynamicPrice" : 2
}, {
  "timeTax" : 5,
  "cityTax" : 5,
  "triggerSuperKM" : 2,
  "superKMTax" : 7,
  "baseTax" : 6,
  "distanceTax" : 1,
  "citySpeed" : 9,
  "id" : 0,
  "publicTranpPass" : 3,
  "cityId" : "cityId",
  "dynamicPrice" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all Gain
 * return all Gain items
 *
 * returns List
 **/
exports.getGain = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "timeTax" : 5,
  "cityTax" : 5,
  "triggerSuperKM" : 2,
  "superKMTax" : 7,
  "baseTax" : 6,
  "distanceTax" : 1,
  "citySpeed" : 9,
  "id" : 0,
  "publicTranpPass" : 3,
  "cityId" : "cityId",
  "dynamicPrice" : 2
}, {
  "timeTax" : 5,
  "cityTax" : 5,
  "triggerSuperKM" : 2,
  "superKMTax" : 7,
  "baseTax" : 6,
  "distanceTax" : 1,
  "citySpeed" : 9,
  "id" : 0,
  "publicTranpPass" : 3,
  "cityId" : "cityId",
  "dynamicPrice" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing Gain
 * 
 *
 * body Gain Gain object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateGain = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

