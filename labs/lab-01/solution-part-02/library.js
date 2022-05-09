/* eslint-disable no-unused-vars */

import person from './person.js';

const numbers = [ 23, 18, 44, 38 ];

/* export */ function add( x, y ) {
  return x + y;
}

/* export */ const a = 10;
const b = a * 2;
const c = a * 3;
/* export */ const d = b * 2;

export { a, d, add };
export default person;
