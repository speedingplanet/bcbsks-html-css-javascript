// eslint-disable-next-line no-unused-vars
function handleClick(searchField) {
  console.log(`The user is searching on ${searchField.value}`);
}

// eslint-disable-next-line no-unused-vars
function handleClickWantsValue(searchText) {
  console.log(`The user is searching on ${searchText}`);
}

function handleClickWantsFieldId(searchFieldId) {
  let searchField = document.querySelector(searchFieldId);
  console.log(`The user is searching on ${searchField.value}`);
}

function setup() {
  let button = document.querySelector('#search-button');
  // eslint-disable-next-line no-unused-vars
  let searchField = document.querySelector('#search-text');

  //   button.addEventListener('click', () => handleClick(searchField));
  //   button.addEventListener('click', () => handleClickWantsValue(searchField.value));
  button.addEventListener('click', () => handleClickWantsFieldId('#search-text'));

  /*
  button.addEventListener('click', () => {
    console.log(`The user is searching on ${searchField.value}`);
  });
  */
  /*
  button.addEventListener('click', function () {
    console.log('(Inline) The user clicked on the button');
  });
  */
}

setup();
