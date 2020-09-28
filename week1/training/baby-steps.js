'use strict';

// Console.log(process.argv);

let sum = 0;

process.argv.slice( 2 ).forEach( ( arg ) => {

    sum += +arg;

} );

console.log( sum );