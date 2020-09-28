'use strict';

const fs = require('fs');
// chose a file for next actions

const file = process.argv[2];
// to collect the value from a callback function that you pass in as the second argument

fs.readFile(file, function(err, contents) {
  //fs.readFile(file, 'utf8', callback) 

const lines = contents.toString().split('\n').length - 1;

console.log(lines);

});