import { readFile } from 'node:fs/promises';

async function dijkstra() {
  try {
    const contents = await readFile('dijkstra.txt', { encoding: 'utf8' });
    console.log(contents);
  } catch (e) {
    console.log(e);
  }
}

dijkstra();
