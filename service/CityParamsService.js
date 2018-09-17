'use strict';


/**
 * Add a new CityParams
 * 
 *
 * body CityParams CityParams object that needs to be added in the database
 * no response value expected for this operation
 **/
exports.addCityParams = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find CityParams by id and delete
 * delete a CityParams
 *
 * returns List
 **/
exports.deleteCityParams = function() {
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
 * Finds CityParams by id
 * get CityParams by id
 *
 * id Integer ID of CityParams to return
 * returns List
 **/
exports.findCityParamsByid = function(id) {
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
 * get all CityParams
 * return all CityParams items
 *
 * returns List
 **/
exports.getCityParams = function() {
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
 * Update an existing CityParams
 * 
 *
 * body CityParams CityParams object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateCityParams = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

