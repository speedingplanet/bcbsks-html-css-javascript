/* eslint-disable no-unused-vars, no-empty */
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

const betterCalculator = (operation, ...values) => {
  // Sort of overloading here
  if (typeof operation === 'function') return operation(...values);

  let initialValue = 1;
  if (['add', 'subtract'].includes(operation)) {
    // if ( operation === 'add' || operation === 'subtract' ) {
    initialValue = 0;
  }
  return values.reduce((accumulated, current) => {
    switch (operation) {
      case 'add':
        return accumulated + current;
      case 'subtract':
        return accumulated - current;
      case 'multiply':
        return accumulated * current;
      case 'divide':
        return accumulated / current;
      default:
        return accumulated;
    }
  }, initialValue);
};

const add = (...values) => {
  return values.reduce((accumulated, value) => value + accumulated, 0);
};

const subtract = (...values) => {
  return values.reduce((accumulated, value) => value - accumulated, 0);
};

const multiply = (...values) => {
  return values.reduce((accumulated, value) => value * accumulated, 1);
};

const divide = (...values) => values.reduce((accumulated, value) => value / accumulated, 1);

console.log(betterCalculator(add, 1, 2, 3, 4));
console.log(betterCalculator('subtract', 10, 5, 2, 1));
