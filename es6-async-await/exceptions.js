import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  try {
    const response = read('foo', false);
    console.log(elapsed(), 'throwOnce', response);
  } catch (error) {
    console.error(elapsed(), 'throwOnce Error:', error.message);
  }
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  try {
    const response = await read('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', response);
    const response1 = await read('foo2', false);
    console.log(elapsed(), 'throwSeveral1:', response1);
    const response2 = await read('foo3', false);
    console.log(elapsed(), 'throwSeveral1:', response2);
  } catch (error) {
    console.error(elapsed(), 'throwSeveral Error:', error.message);
  }
}

async function throwChained() {
  try {
    const response = await read('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', response);
    const response1 = await read(response);
    console.log(elapsed(), 'throwChained1:', response1);
    const response2 = await read(response1);
    console.log(elapsed(), 'throwChained1:', response2);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error.message);
  }
}

await throwOnce();
await throwSeveral();
await throwChained();
