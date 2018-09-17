'use strict';

var utils = require('../utils/writer.js');
var FieldFuel = require('../service/FieldFuelService');

module.exports.addFieldFuel = function addFieldFuel (req, res, next) {
  var body = req.swagger.params['body'].value;
  FieldFuel.addFieldFuel(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFieldFuel = function deleteFieldFuel (req, res, next) {
  FieldFuel.deleteFieldFuel()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFieldFuel = function getFieldFuel (req, res, next) {
  FieldFuel.getFieldFuel()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFieldFuel = function updateFieldFuel (req, res, next) {
  var body = req.swagger.params['body'].value;
  FieldFuel.updateFieldFuel(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
