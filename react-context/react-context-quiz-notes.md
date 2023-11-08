# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
  to get rid of prop drilling, IE teleport data to a component, instead of passing.
- What values can be stored in context?

- How do you create context and make it available to the components?
  create a LevelContext.js/ts module, import from react createContext, then export the variable assigned using the createContext method.
  once in the component import useContext from react
- How do you access the context values?
  by wrapping the jsx you want in levels with a context provider.
- When would you use context? (in addition to the best answer: "rarely")
  to add themes to your app, IE dark/light mode.

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
