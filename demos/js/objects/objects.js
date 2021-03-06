/* eslint-disable no-unused-vars, no-unused-expressions */
const person = {
  firstName: 'John',
  lastName: 'Paxton',
  city: 'Nutley',
  state: 'NJ',

  // Different ways to add a function
  getCity: function () {
    return this.city;
  },
  add: (x, y) => x + y,
  getState() {
    return this.state;
  },
  setupEvent() {
    let el = document.getElementById('some-element');
    // el.addEventListener( 'click', function() {
    el.addEventListener('click', () => {
      console.log(`${this.firstName} lives in ${this.state}.`);
    });
  },
};

function alpha() {
  console.log(this); // Points to the Window/globalThis/global context
  function beta() {
    console.log(this); // points to alpha's context
    function gamma() {
      console.log(this); // points to beta's context
    }
  }
}

// Iteration possibilities
const keys = Object.keys(person);
const values = Object.values(person);

// entries [[key1, value1], [key2, value2]]
const entries = Object.entries(person);

Object.keys(person).forEach((key) => {
  console.log(`${key}: ${person[key]}`);
});

// Array destructuring in a function's arguments list
Object.entries(person).forEach(([key, value]) => {});

// Object.keys() equivalent
for (const key in person) {
  // Whatever
}

// enumerable: does this key show up in a loop?
// configurable: can we call defineProperty() on this key?
// writeable: can this value be changed?

// eslint-disable-next-line max-len
// More here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description

Object.keys(person)
  .filter((key) => typeof person[key] === 'function')
  .forEach((key) => {
    Object.defineProperty(person, key, { enumerable: false });
  });

Object.defineProperty(person, 'someMethod', {
  enumerable: false,
  value: () => console.log('Some method'),
});

let [first, second] = [1, 2, 3, 4];
// Destructuring
const { firstName, city } = person;

// Assignment
let foo = 'whatever';
let o1 = {
  // eslint-disable-next-line object-shorthand
  foo: foo,
};
let o2 = {
  foo,
};

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

let calculator = {
  add,
  subtract,
  multiply,
  divide,
};

// Identifiers: $, _, or alphabetical character, followed by $, _, alphanumeric
// $, _, $foo, _foo, foo, bar, baz, something_complicated;

const state = {
  aString: '',
  aNumber: 0,
  aFunction: function () {},
  anArrowFunction: () => {},
  anotherFunction() {},
  anotherObject: {
    innerObject: {
      reallyDeepObject: {
        kindOfRidiculousObject: {
          message: 'Hi',
        },
      },
    },
  },
  'something-complicated': 'value',
  'some spaces': 'value',
};

state['some spaces'];
state.aString;
