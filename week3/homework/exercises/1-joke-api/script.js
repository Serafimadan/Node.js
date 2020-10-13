/**
 * 1. Chuck Norris programs do not accept input
 * 
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console. 
 * Make use of `async/await` and `try/catch`
 * 
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */
/*
* source with information what was used are https://hackersandslackers.com/making-api-requests-with-nodejs/
* https://www.npmjs.com/package/node-fetch
*/
function printChuckNorrisJoke() {
  // YOUR CODE GOES IN HERE
  const fetch = require('node-fetch');

  const url = `http://api.icndb.com/jokes/random`;
  const getJoke = async (url) => {
    try {
      const response = await fetch(url, {method: 'get'});
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  getJoke(url);
}
printChuckNorrisJoke();