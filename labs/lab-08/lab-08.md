# Lab 08

Working with form validation

## Part 1

Build out a form in `lab-08.html` with the following fields and validations:

- firstName, text, required, should have an initial capital letter followed by other letters
- lastName, as above
- city, required, could be two or more words, should be capitalized
- state, required, two characters long, no more no less, both capital letters. Maybe a select list?
- dateOfBirth, required, min and max values for human lifetimes
- ip, NOT required, but has a pattern match with a typical IPv4 address (255.255.255.255)
- Add a submit button

Don't forget to associate labels with the form fields.  
Test the validations on the form. Ensure they work correctly.

## Part 2

Add CSS styling to the form. Indicate when a field is in a valid or invalid state, and when it's required.  
Do this for each of the fields

## Part 3

Add JavaScript to the form which does the following:

- For the firstName and lastName fields, sets an appropriate custom message
- For the state field, sets a custom message indicating that the value should be a US state
- For the ip field, sets a custom message indicating the proper format of an IP address

Test out each of these.
