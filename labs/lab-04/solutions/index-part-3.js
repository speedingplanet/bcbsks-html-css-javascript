function setup() {
  let button = document.querySelector('#search-button');
  let searchField = document.querySelector('#search-text');

  button.addEventListener('click', () => {
    console.log(`The user is searching on ${searchField.value}`);
  });
}

setup();
