// Placeholder
import { people } from '../../../data/people.js';

let list = document.createElement( 'ul' );
let target = document.getElementById( 'target' );

// eslint-disable-next-line no-unused-vars
let names = people.map( ( person ) => {
  let name = person.firstName + ' ' + person.lastName;
  list.insertAdjacentHTML( 'beforeend', `<li>${name}</li>` );
  return name;
} );

target.append( list );

let sortButton = document.getElementById( 'sort-button' );
let sortMessage = document.getElementById( 'sort-message' );
let sortAscending = true;

function sortPeople( localPeople = people, shouldSort = true ) {
  if ( shouldSort ) {
    if ( sortAscending ) {
      localPeople.sort( ( a, b ) => a.lastName.localeCompare( b.lastName ) );
      sortButton.textContent = 'Sort Names (descending)';
      sortMessage.textContent = 'Names sorted in ascending order';
    } else {
      localPeople.reverse();
      sortButton.textContent = 'Sort Names (ascending)';
      sortMessage.textContent = 'Names sorted in descending order';
    }
    sortAscending = !sortAscending;
  }
  list.remove();
  list.replaceChildren();
  localPeople.forEach( ( person ) => {
    list.insertAdjacentHTML(
      'beforeend',
      `<li>${person.firstName} ${person.lastName}</li>`,
    );
  } );
  target.append( list );
}

sortButton.addEventListener( 'click', () => {
  sortPeople();
} );

let form = document.getElementById( 'add-person' );
form.addEventListener( 'submit', ( event ) => {
  event.preventDefault();
  let formData = new FormData( form );
  let person = {};

  for ( let [ key, value ] of formData ) {
    person[key] = value;
  }

  // people[people.length] = person;
  people.push( person );
  form.reset();
  sortAscending = true;
  sortPeople();
} );

let filterInput = document.getElementById( 'filterNames' );
filterInput.addEventListener( 'input', ( event ) => {
  let filteredPeople = people.filter( ( person ) => {
    /*
    let personName = `${person.firstName} ${person.lastName}`;
    let nameFilter = event.target.value;
    */
    return `${person.firstName} ${person.lastName}`.includes(
      event.target.value,
    );
  } );

  sortPeople( filteredPeople, false );
} );
