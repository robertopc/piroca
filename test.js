'use strict';

var test = require('ava');
var pirocaNames = require('./');

test(function (t) {
  t.assert(pirocaNames.all.length > 1);
  t.assert(pirocaNames.randomize());
  t.end();
});
