# Lab 05

A series of labs covering data and the Document Object Model.

## Part 1

Import `people` from `data/people.js`.
Create an array `names` which contains the full name of each user as a string.  
For example: `['John Paxton', 'Dann Russo']`.  
Print the `names` array to the console.
Render the list of names as an unordered list, with each list item a full name.

## Part 2

Add a button to the HTML page, labeled "Sort Names"
When the user clicks on the button, sort the array of names alphabetically by last name.
If the user clicks the button again, reverse the sort.
**Challenge**: Add an indicator to the button to show sort state (ascending or descending, maybe ⏫ and ⏬ ? )

## Part 3

Add a div with a label, text field, and button.
When the button is clicked on

- Add the content in the text field to the list of names
- Add the new name to the unordered list in HTML
- Blank out the content in the text field
  **Challenge** Automatically update the sorting of the list

## Part 4

Add a div with a label and text field.
Content in the text field filters the list of names. If you enter 'Smi' in the text field, 'John Smith' should match but 'Sam Jones' should not.  
Filter as the user types. No button to click on here.  
What happens when the user deletes content from the text field?
