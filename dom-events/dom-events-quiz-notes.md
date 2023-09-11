# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?

to debug/test

- What is the purpose of events and event handling?

the purpose of events is to allow for your an action to trigger so your code can react

the purpose of event handling is to run a certain codeblock.

- Are all possible parameters required to use a JavaScript method or function?

Yes they are re

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

addEventListener

- What is a callback function?

a callback function is a function passed as an arguement into another function

- What object is passed into an event listener callback when the event fires?

the MouseEvent

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

the event target is the HTML element of where the event occured.

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

one eventhandler is calling the function, and one is calling the function without an argument.

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
