# Lab 09

Working with asynchronous code

## Part 1: Setup

Install json-server from npm: `npm install json-server`.  
Open a terminal in Visual Studio Code.  
Run the following command `npx json-server -p 8000 labs/data/people.json`. Note that it's people.**json** not js.  
Open a browser and check out the following URLs:
* http://localhost:8000/
* http://localhost:8000/people
* http://localhost:8000/1

After you've visited these URLs, bring the command prompt back up. Hit `Ctrl-C` in the terminal window to stop json-server.

It would be tedious and brittle to run this command from the command prompt all the time. Let's add it to the set of npm scripts we can run.

Open `package.json`. Go to the `scripts` section. Add a key `people-server` with `json-server -p 8000 labs/data/people.json` as the value. Save the file.  
Return to the command prompt. Try running `npm run people-server`. You should see json-server come back up and you should be able to visit URLs as before!

## Part 2

Creating a DAO

Create a file, `lab-09-dao.js`. It should export an (at the moment) empty JavaScript object.

Create a function `getCount` that does the following:
* Makes a request to http://localhost:8000/people
* Retrieves the count of records returned
* Returns a Promise wrapped around the value of the count

In `lab-09.js`, import the DAO from `lab-09-dao.js`.  
Call `getCount` on the dao. When results are retrieved, add them to the document in the paragraph with the `async-status` class. 

# Part 3

Fetching data to build out a list.

Update the DAO in `lab-09-dao.js` to include a new function `getPeople`. It should return a Promise of the list of people.  
In `lab-09.js`, invoke `getPeople` to fetch the people from the server.  
Use `buildList` from `lab-09-dom.js` to build a list into the DOM. The target should be #names-list (or .names-list). Pass in an array of field names you'd like to display.  
Check that the list of names displays in the page. 

# Part 4

Sorting data.

The "Sort" button is disabled. Enable it. When it is clicked on, make a new request 
to the server, fetching data back that is sorted. The docs for how to modify your URL 
are here: https://github.com/typicode/json-server#sort. Consider whether to update `getPeople`
or to provide a new DAO method `sortPeople(field)`. 

Consider doing the same for the filter action.... What problems might arise?

# Part 5

Filtering data.

Enable the filtering functionality. Tie it to lodash's `debounce` utility to prevent 
overwhelming the server with requests. Add the code to a new method in the DAO, `filterUsers`. 