#! /usr/bin/env node
const del = require('node-delete');
const cmd = require('node-cmd');

del(['./src/*.js', './src/*.map', './src/*.d.ts'], () => true);
cmd.get(`tslint -c tslint.json src/**/*.ts`, (err, data, stderr) => {
    if(data) {
        throw Error(data);
    };
});
