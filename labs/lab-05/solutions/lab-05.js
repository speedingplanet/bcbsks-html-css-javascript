// Placeholder
import { people } from '../data/people.js';

let names = [];
let list = document.createElement('ul');

let target = document.getElementById('target');

for (let x = 0; x < people.length; x++) {
  names[x] = people[x].firstName + ' ' + people[x].lastName;
  console.log(names[x]);
  list.insertAdjacentHTML('beforeend', `<li>${names[x]}</li>`);
}

target.append(list);

let sortButton = document.getElementById('sort-button');
let sortMessage = document.getElementById('sort-message');
let sortAscending = true;

function sortPeople() {
  if (sortAscending) {
    people.sort((a, b) => a.lastName.localeCompare(b.lastName));
    sortButton.textContent = 'Sort Names (descending)';
    sortMessage.textContent = 'Names sorted in ascending order';
  } else {
    people.reverse();
    sortButton.textContent = 'Sort Names (ascending)';
    sortMessage.textContent = 'Names sorted in descending order';
  }
  list.remove();
  list.replaceChildren();
  for (let person of people) {
    list.insertAdjacentHTML('beforeend', `<li>${person.firstName} ${person.lastName}</li>`);
  }
  target.append(list);
  sortAscending = !sortAscending;
}
sortButton.addEventListener('click', () => {
  sortPeople();
});

let form = document.getElementById('add-person');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let formData = new FormData(form);
  let person = {};
  for (let [key, value] of formData) {
    person[key] = value;
  }
  people[people.length] = person;
  form.reset();
  sortAscending = true;
  sortPeople();
});
