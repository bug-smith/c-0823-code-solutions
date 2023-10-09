# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  () parameters (function key word)=> expression
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  the functionality is changed, by not being able to use a statement
- When using _concise body syntax_, how do you return an object literal?
  wrap the object literal in parenthesis
- In the expression
  ```js
  foo(() => 42);
  ```
  - Identify the arrow function
    () => 42;
  - How many arguments does the arrow function take?
    0
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    0
  - What type of argument is passed to the function `foo`?
    NA
- In the expression
  ```js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
  ```
  - Identify the arrow function
    (y) => {
    console.log(`4y = ${4 * y}`);
  - How many arguments does the arrow function take?
    1
  - What value does it return?
    4 \* y
  - How many arguments are passed to the function `bar`?
    1
  - What type of argument is passed to the function `bar`?
    callback function
  - When does the arrow function's code get executed?
    immediately
- How does the value of `this` differ between standard functions and arrow functions?
  it differs by the arrow function inheiriting the value from their parent

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
