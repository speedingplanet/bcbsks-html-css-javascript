# Lab 07

## Part 1

We are recreating the custom card/panel from exercise 4. The classes are already in-place in the HTML,
but you have to define what CSS applies for each class:

- Add a class `panel` defined as follows:

```css
min-height: fit-content;
width: 12rem;
border: 2px solid black;
font-family: sans-serif;
```

- Use a selector to ensure that any tag under `panel` has no margin or padding
- Add a selector that only targets `panel-header` when it's the child of `panel`.
  Add the following code:

```css
padding: 10px;
background-color: lightgray;
font-weight: bold;
font-size: 150%;
text-align: center;
border-bottom: 2px inset darkgray;
```

- Add 20px of padding to `panel-body`
- If there's an unordered list under the panel-body, make sure it does not have bullet points.
- **Challenge** What if the text in the panel header were not in a paragraph tag? Or what if it were in one of the h1-h6 tags? Write a selector that tries to normalize the content under `panel-header`, regardless of the tags used
- **More Challenge!** What if the panel body is plain text or a paragraph and it overflows the size of the panel? Can we control what to do with overflow text so that it creates a scrollbar?

## Part 2

- Create a copy of the first panel, with different data.
- Make the body of the second panel an unordered list.
- Using the rules of specificity, or a good CSS selector, override the selector which prevents bullet points from showing up
  with a different selector that prefers the circle type
  - Is there more than one way to do this? Experiment!
- Ensure that this override does not affect the first panel

# Part 3

- Create a new class, '.panel-selected'. It should have the following styling:

```css
box-shadow: 0 0 2px 2px green;
```

Feel free to tweak the values, including the color. They are offset-x, offset-y, blur radius, and spread radius.  
More info here: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow

- Add the class to one of the panels. Experiment with the style until it fits the effect you're looking for.
- Remove the class from the panel.
- Create a JavaScript file, `lab-07.js`.
- In `lab-07.js`, add code to apply an event handler to all the panels. When they are clicked on, they should toggle the `panel-select` class.
- Add text below the `header` element with this message: "You have selected X panel(s)". Update X with a count of the number
  of selected panels

## Part 4

- Wrap the panels in a div. Give the div the class `flex-container`. 
- Style `flex-container` so that it's `display` value is `flex` and there is space around the elements
  - Experiment with values to get an effect/appearance that you like
- Add several panels, using copy and paste
  - What happens to the layout? What happens to the panels?
- Fix the items under flex-container so they will not shrink
- Fix flex container to allow elements under it to wrap
- Adjust the space between vertical elements in flex-container