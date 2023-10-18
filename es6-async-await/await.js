import read from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function readOnce() {
  try {
    const response = await read('foo/bar.html');
    console.log(elapsed(), 'readOnce:', response);
  } catch (err) {
    console.error();
  }
}

async function readSeveral() {
  try {
    const response1 = await read('foo1/bar.html');
    console.log(elapsed(), 'readSeveral1:', response1);
    const response2 = await read('foo2/bar.html');
    console.log(elapsed(), 'readSeveral2:', response2);
    const response3 = await read('foo3/bar.html');
    console.log(elapsed(), 'readSeveral3:', response3);
  } catch (error) {
    console.error();
  }
}

async function readChained() {
  try {
    const response = await read('foo-chain/bar.html');
    console.log(elapsed(), 'readChained1:', response);
    const response1 = await read(response);
    console.log(elapsed(), 'readChained2:', response1);
    const response2 = await read(response1);
    console.log(elapsed(), 'readChained3:', response2);
  } catch (error) {
    console.log(error);
  }
}

await readOnce();
await readSeveral();
await readChained();
