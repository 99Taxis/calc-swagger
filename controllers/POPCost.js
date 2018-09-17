'use strict';

var utils = require('../utils/writer.js');
var POPCost = require('../service/POPCostService');

module.exports.addPOPCost = function addPOPCost (req, res, next) {
  var body = req.swagger.params['body'].value;
  POPCost.addPOPCost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deletePOPCost = function deletePOPCost (req, res, next) {
  POPCost.deletePOPCost()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPOPCost = function getPOPCost (req, res, next) {
  POPCost.getPOPCost()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePOPCost = function updatePOPCost (req, res, next) {
  var body = req.swagger.params['body'].value;
  POPCost.updatePOPCost(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
