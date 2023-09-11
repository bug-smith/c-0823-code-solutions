# dom-query-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

console.log()

- What is a "model"?

a model is a modifiable data set
representation of a data structure

- Which "document" is being referred to in the phrase Document Object Model?

the HTML document

- What is the word "object" referring to in the phrase Document Object Model?

an HTML tag

- What is a DOM Tree?

a DOM tree is the structure of the objects and nested objects within the HTML document, to allow for access points to manage the dataset.

- Give two examples of `document` methods that retrieve a single element from the DOM.

document.body.style.background
document.getElementById(id)

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?

to reaccess the DOM data

- What `console` method allows you to inspect the properties of a DOM element object?

console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

to allow for all of the HTML Document to load.

- What does `document.querySelector()` take as its argument and what does it return?

it takes a CSS selector as an arguement, and returns the html tag/element details, within that selector.

- What does `document.querySelectorAll()` take as its argument and what does it return?

it returns all elements inside the matching css selector

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
