'use strict';

// fs module connect
const fs = require('fs');
// chose a file for next actions
const fileName = process.argv[2];
// use a single synchronous filesystem operation
const content = fs.readFileSync(fileName);
// variable returns the content in strings
const strings = content.toString();
// get a number of newlines
const lines = strings.split('\n').length;

console.log(lines-1);