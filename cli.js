#!/usr/bin/env node
'use strict';

var meow = require('meow');
var piroca = require('./');

var cli = meow({
  help: [
    '',
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
    '  --all   Get all piroca names instead of a random piroca name.',
    '',
    "          _,-%/%|",
    "      _,-'    \\//%\\",
    "  _,-'        \\%/|%",
    "/ / )    __,--  /%\\",
    "\\__/_,-'%(%  ;  %)%",
    "        %\\%,   %\\",
    "          '--%'"
  ]
});

console.log(cli.flags.all ? piroca.names.join('\n') : piroca.randomize());
