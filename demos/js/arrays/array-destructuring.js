/* eslint-disable no-unused-vars */
const names = ['John', 'Dan', 'Tim'];

const [first, second, third] = names;
console.log(first); // John

const [f1, , f3] = names;

const moreNames = ['Andreina', 'Hector', 'Andres'];

// Don't do this, adds moreNames as a single element array
// names.push( moreNames );

// This is better, unwinds/spreads the array into its constituent elements
names.push(...moreNames);

// Cheap copy (shallow)
const copiedNames = [...names];

// Add two arrays together
// Older
let combinedNames = names.concat(moreNames);

// Newer, maybe better?
let allNames = [...names, ...moreNames];

function returnTwoThings() {
  // Do whatever
  return [
    'someValue',
    function () {
      console.log('This does something!');
    },
  ];
}

const [string, fn] = returnTwoThings();
