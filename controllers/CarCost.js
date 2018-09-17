'use strict';

var utils = require('../utils/writer.js');
var CarCost = require('../service/CarCostService');

module.exports.addCarCost = function addCarCost (req, res, next) {
  var body = req.swagger.params['body'].value;
  CarCost.addCarCost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCarCost = function deleteCarCost (req, res, next) {
  CarCost.deleteCarCost()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCarCost = function getCarCost (req, res, next) {
  CarCost.getCarCost()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCarCost = function updateCarCost (req, res, next) {
  var body = req.swagger.params['body'].value;
  CarCost.updateCarCost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
