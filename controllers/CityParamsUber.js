'use strict';

var utils = require('../utils/writer.js');
var CityParamsUber = require('../service/CityParamsUberService');

module.exports.addCityParamsUber = function addCityParamsUber (req, res, next) {
  var body = req.swagger.params['body'].value;
  CityParamsUber.addCityParamsUber(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCityParamsUber = function deleteCityParamsUber (req, res, next) {
  CityParamsUber.deleteCityParamsUber()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findCityParamsUberByid = function findCityParamsUberByid (req, res, next) {
  var id = req.swagger.params['id'].value;
  CityParamsUber.findCityParamsUberByid(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCityParamsUber = function getCityParamsUber (req, res, next) {
  CityParamsUber.getCityParamsUber()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCityParamsUber = function updateCityParamsUber (req, res, next) {
  var body = req.swagger.params['body'].value;
  CityParamsUber.updateCityParamsUber(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
