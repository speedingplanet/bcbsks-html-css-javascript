/* eslint-disable */
// False values
const undef = undefined;
const nullValue = null;
const x = 0;
const empty = '';
const booleanFalse = false;
const notANumber = NaN;

/*
if () {}
if () {} else {}
if () {} else if () {} else if () {} else {}

== vs ===
*/

let someVariable = 'baz';

switch (someVariable) {
  case 'foo':
    console.log('Matched "foo"!');
    break;
  case 'bar':
    console.log('Matched "bar"!');
    break;
  case 'baz':
    console.log('Matched "baz"!');
    break;
  default:
    console.log('No matches!');
}
