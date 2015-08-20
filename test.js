'use strict';

var test = require('ava');
var piroca = require('./');

test(function (t) {
  t.assert(piroca.names.length > 1);
  t.assert(piroca.randomize());
  t.end();
});
