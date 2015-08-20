'use strict';

var uniqueRandomArray = require('unique-random-array');
var piroca = require('./names.json');

exports.names = piroca;
exports.randomize = uniqueRandomArray(piroca);
