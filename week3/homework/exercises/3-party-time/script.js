
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
/*
* sources with information what was used are https://hackersandslackers.com/making-api-requests-with-nodejs/
* https://www.npmjs.com/package/node-fetch
*/
function makeReservation() {
  // YOUR CODE GOES IN HERE
  const fetch = require('node-fetch');
  const visitorsInform = {
    name: 'Serafima Madan',
    numberOfPeople: 2
  };
  const url = `https://reservation100-sandbox.mxapps.io/api/reservations`;
  const fetchData = async () => {
    try {
      const response = await fetch(url, {
        method: 'post',
        body: JSON.stringify(visitorsInform),
        headers: {'Content-Type': 'application/json'}
      });
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }  
  }; 
  fetchData();
}
makeReservation();