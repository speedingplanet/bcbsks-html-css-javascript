import { people } from './data.js';

for (let person of people) {
  if (person === 'John Doe') {
    console.log('Encountered John Doe. Stopping....');
    break;
  }

  if (person.startsWith('Jenny')) {
    continue;
  }

  console.log(person);
  if (person.startsWith('S')) {
    console.log('Hey, your name starts with "s"!');
  }

  let names = person.split(' ');
  if (names[1].startsWith('S')) {
    console.log('Hey, your LAST name starts with "s"!');
  }

  //   let re = new RegExp('[A-z]+ S');
  let re = /[A-z]+ S/;
  if (re.test(person)) {
    console.log('A regular expression says that your last name starts with "S"!');
  }

  if (person.includes(' S')) {
    console.log('Your name includes an "S" which might start your last name.');
  }
}
