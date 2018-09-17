'use strict';


/**
 * Add a new CityParamsUber
 * 
 *
 * body CityParamsUber CityParamsUber object that needs to be added in the database
 * no response value expected for this operation
 **/
exports.addCityParamsUber = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find CityParamsUber by id and delete
 * delete a CityParamsUber
 *
 * returns List
 **/
exports.deleteCityParamsUber = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "alcoholPrize" : 9,
  "gasolinePrize" : 3,
  "travelTime" : 5,
  "GNVPrize" : 7,
  "PAX" : 1,
  "travelDistance" : 5,
  "id" : 0,
  "cityID" : "cityID",
  "TPH" : 6,
  "ASP" : 2
}, {
  "alcoholPrize" : 9,
  "gasolinePrize" : 3,
  "travelTime" : 5,
  "GNVPrize" : 7,
  "PAX" : 1,
  "travelDistance" : 5,
  "id" : 0,
  "cityID" : "cityID",
  "TPH" : 6,
  "ASP" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Finds CityParamsUber by id
 * get CityParamsUber by id
 *
 * id Integer ID of CityParamsUber to return
 * returns List
 **/
exports.findCityParamsUberByid = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "alcoholPrize" : 9,
  "gasolinePrize" : 3,
  "travelTime" : 5,
  "GNVPrize" : 7,
  "PAX" : 1,
  "travelDistance" : 5,
  "id" : 0,
  "cityID" : "cityID",
  "TPH" : 6,
  "ASP" : 2
}, {
  "alcoholPrize" : 9,
  "gasolinePrize" : 3,
  "travelTime" : 5,
  "GNVPrize" : 7,
  "PAX" : 1,
  "travelDistance" : 5,
  "id" : 0,
  "cityID" : "cityID",
  "TPH" : 6,
  "ASP" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all CityParamsUber
 * return all CityParamsUber items
 *
 * returns List
 **/
exports.getCityParamsUber = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "alcoholPrize" : 9,
  "gasolinePrize" : 3,
  "travelTime" : 5,
  "GNVPrize" : 7,
  "PAX" : 1,
  "travelDistance" : 5,
  "id" : 0,
  "cityID" : "cityID",
  "TPH" : 6,
  "ASP" : 2
}, {
  "alcoholPrize" : 9,
  "gasolinePrize" : 3,
  "travelTime" : 5,
  "GNVPrize" : 7,
  "PAX" : 1,
  "travelDistance" : 5,
  "id" : 0,
  "cityID" : "cityID",
  "TPH" : 6,
  "ASP" : 2
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing CityParamsUber
 * 
 *
 * body CityParamsUber CityParamsUber object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateCityParamsUber = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

