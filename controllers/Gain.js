'use strict';

var utils = require('../utils/writer.js');
var Gain = require('../service/GainService');

module.exports.addGain = function addGain (req, res, next) {
  var body = req.swagger.params['body'].value;
  Gain.addGain(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteGain = function deleteGain (req, res, next) {
  Gain.deleteGain()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getGain = function getGain (req, res, next) {
  Gain.getGain()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateGain = function updateGain (req, res, next) {
  var body = req.swagger.params['body'].value;
  Gain.updateGain(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
