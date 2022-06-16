# Lab 04: Event Handling

We will build a search interface that will let us search for clients. In a
later lab, we will plug this interface into a back-end so that it works.

## Part 1: Adding the form

Working in `index.html`:

- Add a single-line text input field with the following properties
  - name: searchText
  - id: search-text
- Put a `<label>` element in front of the form field. Make sure to associate
  it with the text field using the `for` attribute
- Add a button, after the text field. Give it the following properties
  - type: button (very important, this is NOT a submit button)
  - id: search-button
  - The label for the button should be 'Search Clients'

Take a look at the text field and button, make sure they look the way you want
them to.

STOP HERE

## Part 2: Adding an event handler

We will just add an event handler for the button in the form.

- This work happens in `index.js`.
- Write a function called `setup()`. Put it at the top of the file.
- In `setup`, use `document.querySelector` or `document.querySelectorAll` to get
  a reference to the button with the id 'search-button'
- When a user clicks on the button, there should be a message on the console that says
  "The user clicked on the search button".
- The `setup` function is finished.
- Call setup after the function definition.

This part was small, we'll do more in the next part!

STOP HERE

## Part 3: Capturing form input

Now when we click on the search button, we want to capture the form input.

- This is in `index.js` in the `setup` function from the last part.
- Again, use `document.querySelector` or `document.querySelectorAll` to get a
  reference to the form field `#search-text`
- In the event handler for the button, use the reference to the form field to get the
  value currently in that form field.
- Print that value to the console. Something like "The user is searching on ${value}".

STOP HERE

## Part 4: Displaying form input

When we click on the search button, we want the search term to display in the page.

- In `index.html`:
- Add a `div` below the search form, with an id of `search-messages`.
- In `index.js`:
- Create a function OUTSIDE of `setup` called `displayMessage`
- `displayMessage` should take two arguments
  - A message to display `message`
  - The id of an element on the page where `message` is displayed `target`
- In `displayMessage`:
  - Retrieve a refernce to `#target` (the second argument)
  - Clear out any previous children of `#target`
  - Use `insertAdjacentHTML` to add a paragraph to `#target`
  - Insert the paragraph as the first child of `#target`
  - The content of the paragraph tag should be `message` (the first argument), something like
    'You searched on ${searchText}'.
- In the event handler for `#search-button`, call `displayMessage`, passing it the message to display
  and a destination element for said message
- Try it out! You should be able to enter a search term into the form field; click the button
  and then see a message in the page that says "You searched on ..." and whatever you
  searched on.
