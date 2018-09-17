'use strict';

var utils = require('../utils/writer.js');
var CityParams = require('../service/CityParamsService');

module.exports.addCityParams = function addCityParams (req, res, next) {
  var body = req.swagger.params['body'].value;
  CityParams.addCityParams(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCityParams = function deleteCityParams (req, res, next) {
  CityParams.deleteCityParams()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findCityParamsByid = function findCityParamsByid (req, res, next) {
  var id = req.swagger.params['id'].value;
  CityParams.findCityParamsByid(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCityParams = function getCityParams (req, res, next) {
  CityParams.getCityParams()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCityParams = function updateCityParams (req, res, next) {
  var body = req.swagger.params['body'].value;
  CityParams.updateCityParams(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
