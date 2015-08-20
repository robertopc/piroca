#!/usr/bin/env node
'use strict';

var meow = require('meow');
var pirocaNames = require('./');

var cli = meow({
  help: [
    'Examples',
    '  $ piroca',
    '  Pingola',
    '',
    '  $ piroca --all',
    '  Cacete',
    '  Caralho',
    '  ...',
    '',
    'Options',
    '  --all   Get all words instead of a random word'
  ]
});

console.log(cli.flags.all ? pirocaNames.join('\n') : pirocaNames.randomize());
