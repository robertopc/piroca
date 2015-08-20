'use strict';

var uniqueRandomArray = require('unique-random-array');
var pirocaNames = require('./names.json');

exports.pirocaNames = pirocaNames;
exports.randomize = uniqueRandomArray(pirocaNames);
