# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  when the component is done rendering
- What is a React Effect?
  React Effect is a hook that lets you synchronize a components rendering with an external system.
  IE, waiting for an api call, waiting to render an image.
- When should you use an Effect and when should you not use an Effect?
  You should use an effect, if you are dealing with an external system. otherwise you wont need an effect.
- When do Effects run?
  the effects run on mount. inital render
- What function is used to declare an Effect?
  useEffect()
- What are Effect dependencies and how do you declare them?
  they are an array that the effect depends on, if their is a change in the dependency the effect will notice and recall the setup function.
- Why would you want to clean up from an Effect?
  you would want to clean up from an effect, so the codebase has a proper log of events and can be tested with all cases.
- How do you clean up from an Effect?
  you call a function within the setup function and return the
- When does the cleanup function run?
  it runs after the setup function.

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
