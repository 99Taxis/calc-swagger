'use strict';

var utils = require('../utils/writer.js');
var CityParamsPop = require('../service/CityParamsPopService');

module.exports.addCityParamsPop = function addCityParamsPop (req, res, next) {
  var body = req.swagger.params['body'].value;
  CityParamsPop.addCityParamsPop(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCityParamsPop = function deleteCityParamsPop (req, res, next) {
  CityParamsPop.deleteCityParamsPop()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findCityParamsPopByid = function findCityParamsPopByid (req, res, next) {
  var id = req.swagger.params['id'].value;
  CityParamsPop.findCityParamsPopByid(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCityParamsPop = function getCityParamsPop (req, res, next) {
  CityParamsPop.getCityParamsPop()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCityParamsPop = function updateCityParamsPop (req, res, next) {
  var body = req.swagger.params['body'].value;
  CityParamsPop.updateCityParamsPop(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
