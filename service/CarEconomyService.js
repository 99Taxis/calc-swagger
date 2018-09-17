'use strict';


/**
 * Add a new CarEconomy
 * 
 *
 * body CarEconomy CarEconomy Object added to the database
 * no response value expected for this operation
 **/
exports.addPet = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds CarEconomy by id
 * get CarEconomy by id
 *
 * id Integer ID of CarEconomy to return
 * returns CarEconomy
 **/
exports.findCarEconomyByid = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "IPVA" : 1,
  "poupanca" : 5,
  "cityParams" : 3,
  "CRLV" : 7,
  "maintenceCost" : 6,
  "id" : 0,
  "carWash" : 9,
  "depreciation" : 5,
  "DPVAT" : 2
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find CarEconomy by id and delete
 * delete a CarEconomy item
 *
 * returns List
 **/
exports.findcalculatorsByTags = function() {
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
 * get all CarEconomy
 * return all CarEconomy items
 *
 * returns List
 **/
exports.getCarEconomy = function() {
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
 * Update an existing CarEconomy
 * 
 *
 * body CarEconomy Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updatePet = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

