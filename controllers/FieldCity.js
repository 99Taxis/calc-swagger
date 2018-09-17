'use strict';

var utils = require('../utils/writer.js');
var FieldCity = require('../service/FieldCityService');

module.exports.addFieldCity = function addFieldCity (req, res, next) {
  var body = req.swagger.params['body'].value;
  FieldCity.addFieldCity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFieldCity = function deleteFieldCity (req, res, next) {
  FieldCity.deleteFieldCity()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFieldCity = function getFieldCity (req, res, next) {
  FieldCity.getFieldCity()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFieldCity = function updateFieldCity (req, res, next) {
  var body = req.swagger.params['body'].value;
  FieldCity.updateFieldCity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
