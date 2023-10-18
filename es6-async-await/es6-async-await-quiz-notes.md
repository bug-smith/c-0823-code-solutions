# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  async creates a binding onto the function, allowing await to be utilized within the function code body
  await: it is used to hold a function promise until the promise is settled
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  await: differs by waiting for the promise to be handled then returning. whereas the then and catch only return an error or success
- When do you use `async`?
  at the start of an async function, or at the top level of a module.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  when you have async binded to the function. it will give an error of unexpected reserved word
- How do you handle errors with `await`?
  through a catch
- What do `try`, `catch` and `throw` do? When do you use them?
  throw: throws an exception. try: looks for a successful response, and if anything in the code block throws an exception it looks to. catch: that looks for an unsucessful respose and expects an exception that is then passed into the return error of the code block
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the promise is added to the call stack, and called regardless of the exception thrown, and doesnt allow for error handling
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async await, it resembles regular codeblock structure, and is easily readable.

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
