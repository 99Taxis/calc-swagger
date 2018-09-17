'use strict';

var utils = require('../utils/writer.js');
var CarEconomy = require('../service/CarEconomyService');

module.exports.addPet = function addPet (req, res, next) {
  var body = req.swagger.params['body'].value;
  CarEconomy.addPet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findCarEconomyByid = function findCarEconomyByid (req, res, next) {
  var id = req.swagger.params['id'].value;
  CarEconomy.findCarEconomyByid(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findcalculatorsByTags = function findcalculatorsByTags (req, res, next) {
  CarEconomy.findcalculatorsByTags()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCarEconomy = function getCarEconomy (req, res, next) {
  CarEconomy.getCarEconomy()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePet = function updatePet (req, res, next) {
  var body = req.swagger.params['body'].value;
  CarEconomy.updatePet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
