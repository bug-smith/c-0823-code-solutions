# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
  it is the target element that initiated the event.
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  bubbling
- What DOM element property tells you what type of element it is?
  .tagName
- What does the `element.closest()` method take as its argument and what does it return?
  it takes a valid css selector, and it returns the cloest element or itself if the selector matches.
- How can you remove an element from the DOM?
  .remove()
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  by adding a handler to the parent element/highest heiarchy to capture the bubble event.

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
