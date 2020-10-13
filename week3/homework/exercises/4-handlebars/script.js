
/**
 * 4. Fun with Handlebars
 * 
 * Write a javascript function that simulates playing the game cards against humanity.
 * The code should choose a subject and a punchline at random,
 * then replace them in a sentece using handlebars.
 * 
 * Hints:
 * - Check the handlebars npm page for examples and documentation
 */

/*  sources with information what was used are https://handlebarsjs.com/installation/#npm-or-yarn-recommended
* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
const Handlebars = require('handlebars');

function drawCard() {
  // YOUR CODE GOES IN HERE
  // firstly define a variable (called cardData), which contains an object with 2 keys
  const cardData = { 
    // randomly assign to these keys values, taken from the corresponding arrays using the function getRandomElement 
    subject: getRandomElement(subjects), 
    punchline: getRandomElement(punchlines)
  };
  // create a variable, called card, that contains a template literal with the Handlebars placeholders
  const card = Handlebars.compile('{{subject}} is great to {{punchline}}');
  // combine the compiled template with cardData to get a complete sentence
  const result = card(cardData);
  console.log(result);
}

/**
 * Given an array, return an element from it chosen at random
 */
function getRandomElement(array) {
  // YOUR CODE GOES IN HERE
    return array[Math.floor(Math.random() * array.length)];
}

const subjects = [
  'shark',
  'popcorn',
  'poison',
  'fork',
  'cherry',
  'toothbrush',
  'cannon',
];

const punchlines = [
  'watch movie with',
  'spread some love',
  'put on cake',
  'clean toilets',
  'go to the moon',
  'achieve world piece',
  'help people learn programing',
];

drawCard();