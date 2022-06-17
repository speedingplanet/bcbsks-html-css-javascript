/* eslint-disable no-unused-vars */
let names = [
  'Aish',
  'Allan',
  'Amir',
  'Angela',
  'Doug',
  'Fatena',
  'Jacob',
  'John',
  'John',
  'Jonah',
  'Srinivasa',
  'Stephanie',
];

// Print out everyone's name:

// As a loop
for (let name of names) {
  console.log(name);
}

// With an iterator function
names.forEach((name) => console.log(name));

// Find names that match criteria
// Names that start with 'a'

// As a loop
let matchingNames = [];
for (let bar of names) {
  if (bar.startsWith('A')) {
    matchingNames.push(bar);
  }
}

console.log('Names that start with A:', matchingNames);

// Iterator function (filter)

// let matchingNamesIterator = names.filter((name) => name.startsWith('A'));
let matchingNamesIterator = names.filter((foo) => foo.startsWith('A'));
let nonMatchingNamesIterator = names.filter((x) => !x.startsWith('A'));
console.log('Names that start with A:', matchingNamesIterator);

// Returns only the first value where the function returns true
// If the function never returns true, find() returns null
let firstMatchingName = names.find((name) => name.startsWith('A'));

let numbers = [1, 2, 3, 4, 5];

// Do some math to the numbers!
// Square each number

let squaredNumbers = [];
for (let n of numbers) {
  squaredNumbers.push(n * n);
}

let mappedNumbers = numbers.map((q) => q * q);

// Turn names into list items
let listItemNames = names.map((name) => {
  let item = document.createElement('li');
  item.textContent = name;
  return item;
});

// Chaining iterators
// Double all even numbers
let inputNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = inputNumbers.filter((x) => x % 2 === 0);
let doubledNumbers = evenNumbers.map((y) => y * 2);

let fasterEvenNumbers = inputNumbers.filter((x) => x % 2 === 0).map((y) => y * 2);
