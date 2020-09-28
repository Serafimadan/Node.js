/**
 ** Exercise 2: To the left, to the left...
 * 
 * Copy and paste your code from the previous exercise.
 * Replace the function `padLeft` to use
 * this new NPM package called `left-pad` instead then
 * Pad the numbers to 8 characters to confirm that it works correctly
 *
 */

let numbers = [ "12", "846", "2", "1236" ];

// YOUR CODE GOES HERE
const leftPad = require( 'left-pad' );

console.log(leftPad(numbers[0], 8, '_'));
console.log(leftPad(numbers[1], 8, '_'));
console.log(leftPad(numbers[2], 8, '_'));
console.log(leftPad(numbers[3], 8, '_'));