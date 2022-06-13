# HTML Labs

## Organizing Content

Create a file `privacy-policy.html`.

Use the content available in `privacy-policy.txt`.

Organize the code into the following sections:

- On Usage
- Conduct On This Site
- Our Requirements
- Your Requirements
- Last Updated, legal mumbo-jumbo

"Internet Privacy Policy" should be the main header for the page.  
Each of the sections above should use the section heading as a secondary header.  
The lines of content under each section should be in their own paragraph, but still under the section.

## Targeting content

Create a home page `index.html`. It should have a main header "BCBSKS Claims App". Beneath that should be a navigation section with links to "privacy-policy.html" and "clients.html". Note that the latter does not exist yet.

Return to "privacy-policy.html".

Anything in ALL CAPS should be wrapped in the `<strong>` element.

Anything in single quotes ' ' should replace the single quotes with the `<em>` element.

All uses of "Contributor" should be links pointing back to https://www.bcbsks.com/.

Make the URL mentioned in "Legal Mumbo-Jumbo" into a link to the appropriate site.

Add a link back to `index.html` with appropriate text.

## Lists

In `index.html`, change the links into an unordered list.

The rest of the work is in `privacy-policy.html`.

In the first paragraph under "Your Requirements", nearly at the end, there's a list of software: "Apple", "Apple Computer", "Mac", "Mac OS", "QuickTime", "QuickTime Streaming Server".

Turn that in-line textual list into an actual unordered HTML list.

Add a navigation section to the top. It should be an ordered list where each item is a secondary header in the page (that is, "1. On Usage", "2. Conduct On This Site" and so on).

Each list item should be a link to the appropriate part of the page. Also, at the bottom of each section, add a "Back" link which links back to the navigation section at the top.

## Tables

Using the data in `clients.tsv`, create a file, `clients.html`, which has a table rendered in HTML with the following details:

Table headers are

- First Name
- Last Name
- City
- State
  and they should be in their own `thead` section.

All of the data should appear in a `tbody` section.

Render 10 rows for practice. Although if you get skillful with multiple cursors and/or search and replace, you might be able to render out all 100 rows relatively quickly.

Add a link at the bottom "Home" pointing back to `index.html`.

Test the links both here (`clients.html`) and `index.html` to make sure they refer to the appropriate pages.
