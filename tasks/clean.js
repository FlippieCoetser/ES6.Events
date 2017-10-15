#! /usr/bin/env node
let del = require('node-delete');
del('./lib/server', () => true);
del(['./src/*.js', './src/*.map', './src/*.d.ts'], () => true);
del('./test/*.js', () => true);