/* eslint-disable no-empty */
import { people } from './data.js';

function processPerson(person) {
  if (person.startsWith('Jenny')) {
    // continue;
    return 'continue';
  }

  if (person === 'John Doe') {
    // break;
    return 'break';
  }

  console.log('person: ', person);
  // if ( person.includes( ' S' ) ) {
  // if ( person.split( ' ' )[1].startsWith( 'S' ) ) {
  if (/ S/.test(person)) {
    console.log('Hey, your last name starts with "s"!');
  }
}

for (let person of people) {
  let returnValue = processPerson(person);
  if (returnValue === 'continue') continue;
  if (returnValue === 'break') break;
}

function greetings(name = 'friend') {
  console.log(`Hello, ${name}!`);
}

greetings('John');
greetings();

// eslint-disable-next-line no-unused-vars
function addOld(values) {
  let total = 0;
  for (let x = 0; x < values.length; x++) {
    total = total + values[x];
  }
  return total;
}

const add = (values) => {
  let total = 0;
  for (let x = 0; x < values.length; x++) {
    total = total + values[x];
  }
  return total;
};

function subtract(values) {
  let total = 0;
  for (let x = 0; x < values.length; x++) {
    total = total - values[x];
  }
  return total;
}

function multiply(values) {
  let total = 1;
  for (let x = 0; x < values.length; x++) {
    total = total * values[x];
  }
  return total;
}

function divide(values) {
  let total = 1;
  for (let x = 0; x < values.length; x++) {
    total = total / values[x];
  }
  return total;
}

function wilbursCalculator(operation, ...values) {
  if (typeof operation === 'function') {
    return operation(values);
  } else {
    const calculator = {
      add,
      subtract,
      multiply,
      divide,
    };
    return calculator[operation](values);
  }
}

// eslint-disable-next-line no-unused-vars
function calculate(operation, ...values) {
  if (operation === 'add') {
  } else if (operation === 'subtract') {
  } else if (operation === 'divide') {
  } else if (operation === 'multiply') {
  }

  switch (operation.toLowerCase()) {
    case 'add':
    case 'subtract':
    case 'multiply':
    case 'divide':
  }
}

console.log(wilbursCalculator(add, 1, 2, 3, 4));
console.log(wilbursCalculator('subtract', 10, 5, 2, 1));
