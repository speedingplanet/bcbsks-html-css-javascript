// Placeholder
import { people } from '../data/people.js';

function buildList(localPeople = people) {
  list.remove();
  list.replaceChildren();
  for (let person of localPeople) {
    list.insertAdjacentHTML('beforeend', `<li>${person.firstName} ${person.lastName}</li>`);
  }
  target.append(list);
}

function sortPeople(localPeople = people, toggle = true) {
  // Don't sort the original
  localPeople = [...localPeople];
  if (toggle) sortAscending = !sortAscending;

  if (sortAscending) {
    localPeople.sort((a, b) => a.lastName.localeCompare(b.lastName));
    sortButton.textContent = 'Sort Names (descending)';
    sortMessage.textContent = 'Names sorted in ascending order';
  } else {
    localPeople.sort((a, b) => b.lastName.localeCompare(a.lastName));
    sortButton.textContent = 'Sort Names (ascending)';
    sortMessage.textContent = 'Names sorted in descending order';
  }
  return localPeople;
}

let list = document.createElement('ul');
let target = document.getElementById('target');

buildList(people);

let sortButton = document.getElementById('sort-button');
let sortMessage = document.getElementById('sort-message');
let sortAscending = false;

sortButton.addEventListener('click', () => {
  buildList(sortPeople());
});

let form = document.getElementById('add-person');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  let person = {};
  for (let [key, value] of formData) {
    person[key] = value;
  }
  // people[people.length] = person;
  people.push(person);
  form.reset();
  buildList(sortPeople(people, false));
});

let filterInput = document.getElementById('filterNames');
filterInput.addEventListener('input', (event) => {
  let filteredPeople = people.filter((person) => {
    let name = person.firstName + ' ' + person.lastName;
    return name.includes(event.target.value);
  });
  buildList(filteredPeople, false);
});
