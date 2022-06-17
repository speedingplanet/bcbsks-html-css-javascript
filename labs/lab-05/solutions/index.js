import { people } from '../data/people.js';

function renderClients(people, target) {
  //   people.forEach((person) => console.log(`${person.firstName} ${person.lastName}`));
  //   people.forEach((person) => console.log(person.firstName + ' ' + person.lastName));
  // people.forEach(({firstName, lastName}) => console.log(`${firstName} ${lastName}`));

  if (!target) {
    throw new Error('You forgot to pass a target ID');
  }

  let element = document.getElementById(target);
  if (!element) {
    throw new Error(`Could not find the element with the id ${target}`);
  }

  element.replaceChildren();

  let rows = people.map((person) => {
    let row = document.createElement('tr');
    row.insertAdjacentHTML(
      'beforeend',
      `
      <td>${person.firstName}</td>
      <td>${person.lastName}</td>
      <td>${person.city}</td>
      <td>${person.state}</td>
      `
    );
    return row;
  });
  // Append rows all at once, rather than row-by-row
  element.append(...rows);

  /* Ok, but inefficient
  people.forEach((person) => {
    let row = document.createElement('tr');
    row.insertAdjacentHTML(
      'beforeend',
      `
    <td>${person.firstName}</td>
    <td>${person.lastName}</td>
    <td>${person.city}</td>
    <td>${person.state}</td>
    `
    );
    element.append(row);
  });
  */
}

// eslint-disable-next-line no-unused-vars
function renderClientsWithLoop(people) {
  for (let person of people) {
    console.log(person.firstName + ' ' + person.lastName);
  }
}

function setup() {
  let button = document.querySelector('#search-button');
  let searchField = document.querySelector('#search-text');

  button.addEventListener('click', () => {
    console.log(`The user is searching on ${searchField.value}`);
    displayMessage(`The user is searching on ${searchField.value}`, 'search-messages');
  });
}

// Is target 'search-messages' or '#search-messages'?
function displayMessage(message, target) {
  let targetElement = document.getElementById(target);
  //   targetElement.textContent = message;
  targetElement.replaceChildren();
  targetElement.insertAdjacentHTML('afterbegin', `<p>${message}</p>`);
}

setup();
renderClients(people, 'search-results');
