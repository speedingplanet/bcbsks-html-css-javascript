# Lab 05

A series of labs covering data and the Document Object Model.

## Part 1: Warm-up/review of loops

Working in `index.js`:

- Import `people` from `../data/people.js`.
- Create a function `renderClients`.
  - It should take one argument, a list of people
  - `people` is an array. Use a loop or iterator function to iterate over the array
  - In the loop/iterator function, print out the first name and last name of each person in the
    array to the console
  - `renderClients` doesn't need to return anything (yet)
- Call `renderClients` after `setup`.

## Part 2: Printing clients

Adding a table for search results. Printing ALL the clients to start. In
the next part, we will actually search/filter the clients

- In `lab-05.html`, add a `section` below `#search-messages`
- In the new `section`, hard code a `table` with the following details
  - The `thead` should have one table row (`tr`) with four `th` elements:
    - First Name
    - Last Name
    - City
    - State
  - The `tbody` should be empty, but should have an ID `search-results`
- The rest of this is in `index.js`:
  - In `renderClients`:
    - Add a second argument to `renderClients`, the id of the element where
      the list will be rendered `target`. This pattern should be familiar
      from the last exercise
    - Get a reference to the `#target` element
    - Clear any child elements out of `#target`
    - In the loop, which prints clients to the console, generate a table row
      for each person.
    - In the table row, add `td` cells with the following content
      - firstName
      - lastName
      - city
      - state
      - You can see how this is going to line up with the table headers, above
    - Still in the loop, add the new table row to `#target`.
    - The function is complete. It still doesn't have a return value (yet)

Now, when you load `lab-05.html`, you should see the search form, and then below it,
an HTML table with all the people in `../data/people.js`. In the next lab, we
will actually hook up the search functionality.

## Part 3: Searching clients

Where we actually hook up the searching functionality to rendering the list
of clients.

- In `index.js`, in the event handler for `#search-button`:
- Assume, for now, that we are searching on last names
- When this event handler fires, we are going to filter the list of people
  to last names that match the value of `#search-text`.
- BUT! We need to hold on to the original list of `people` for later searches
- Use the `filter` function on arrays to filter `people` into an array
  called `displayPeople`.
- Add a call to `renderClients`. Pass in `displayPeople` for the first argument
  and `search-results` as the second argument
- Test by searching on one of the last names from `people`
  ("Hudson", "Gleason", "Miller", "Marks")
