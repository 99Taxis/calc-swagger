'use strict';


/**
 * Add a new POPCost
 * 
 *
 * body POPCost POPCost object that needs to be added in the database
 * no response value expected for this operation
 **/
exports.addPOPCost = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Find POPCost by id and delete
 * delete a POPCost
 *
 * returns List
 **/
exports.deletePOPCost = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "travelWithIntegratCost" : 7,
  "total" : 2,
  "distanceWithIntegratMinuteCost" : 5,
  "totalCostPublicTransp" : 3,
  "distanceWithoutIntegratMinuteCost" : 1,
  "distanceWithIntegratCost" : 5,
  "travelWithoutIntegratCost" : 2,
  "id" : 0,
  "totalCostYear" : 9,
  "distanceWithoutIntegratCost" : 6
}, {
  "travelWithIntegratCost" : 7,
  "total" : 2,
  "distanceWithIntegratMinuteCost" : 5,
  "totalCostPublicTransp" : 3,
  "distanceWithoutIntegratMinuteCost" : 1,
  "distanceWithIntegratCost" : 5,
  "travelWithoutIntegratCost" : 2,
  "id" : 0,
  "totalCostYear" : 9,
  "distanceWithoutIntegratCost" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get all POPCost
 * return all POPCost items
 *
 * returns List
 **/
exports.getPOPCost = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "travelWithIntegratCost" : 7,
  "total" : 2,
  "distanceWithIntegratMinuteCost" : 5,
  "totalCostPublicTransp" : 3,
  "distanceWithoutIntegratMinuteCost" : 1,
  "distanceWithIntegratCost" : 5,
  "travelWithoutIntegratCost" : 2,
  "id" : 0,
  "totalCostYear" : 9,
  "distanceWithoutIntegratCost" : 6
}, {
  "travelWithIntegratCost" : 7,
  "total" : 2,
  "distanceWithIntegratMinuteCost" : 5,
  "totalCostPublicTransp" : 3,
  "distanceWithoutIntegratMinuteCost" : 1,
  "distanceWithIntegratCost" : 5,
  "travelWithoutIntegratCost" : 2,
  "id" : 0,
  "totalCostYear" : 9,
  "distanceWithoutIntegratCost" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing POPCost
 * 
 *
 * body POPCost POPCost object that needs to be updated
 * no response value expected for this operation
 **/
exports.updatePOPCost = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

