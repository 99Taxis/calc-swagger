'use strict';


/**
 * Add a new CityParamsPop
 * 
 *
 * body CityParamsPop CityParamsPop object that needs to be added in the database
 * no response value expected for this operation
 **/
exports.addCityParamsPop = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find CityParamsPop by id and delete
 * delete a CityParamsPop
 *
 * returns List
 **/
exports.deleteCityParamsPop = function() {
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
 * Finds CityParamsPop by id
 * get CityParamsPop by id
 *
 * id Integer ID of CityParamsPop to return
 * returns List
 **/
exports.findCityParamsPopByid = function(id) {
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
 * get all CityParamsPop
 * return all CityParamsPop items
 *
 * returns List
 **/
exports.getCityParamsPop = function() {
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
 * Update an existing CityParamsPop
 * 
 *
 * body CityParamsPop CityParamsPop object that needs to be updated
 * no response value expected for this operation
 **/
exports.updateCityParamsPop = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

