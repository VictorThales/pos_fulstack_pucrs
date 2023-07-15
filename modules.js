//---------------- commomJS / ecmascript6 exports

//CommomJS
// File: math.js
const sum = (a, b) => {
  return a + b;
};

module.exports = {
  sum
};

// File: main.js
const math = require('./math');

console.log(math.sum(2, 3)); // Output: 5


//ECMAScript 6 (ES6):

// File: math.js
export const sum = (a, b) => {
  return a + b;
};

// File: main.js
import { sum } from './math';

console.log(sum(2, 3)); // Output: 5
