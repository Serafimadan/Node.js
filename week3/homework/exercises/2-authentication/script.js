
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */
/*
* source with information what was used are https://hackersandslackers.com/making-api-requests-with-nodejs/
* https://www.npmjs.com/package/node-fetch
*/
function printBooks() {
  // YOUR CODE GOES IN HERE
  const fetch = require('node-fetch');
  const url = `https://restapiabasicauthe-sandbox.mxapps.io/api/books`;
  // 
const authentUser = async () => {
    try {
        const res = await fetch(url, {
          headers: { 'Authorization': 'Basic YWRtaW46aHZnWDhLbFZFYQ==' }
        });
        const json = await res.json();
        console.log(json);
    } catch (err) {
        console.error(err);
    }
};

authentUser();
}

printBooks();