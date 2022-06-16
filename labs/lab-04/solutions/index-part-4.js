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
