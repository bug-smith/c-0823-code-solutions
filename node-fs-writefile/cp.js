import { readFile, writeFile } from 'node:fs/promises';

const [, , source, dest] = process.argv;
try {
  const reading = await readFile(source);
  await writeFile(dest, reading);
} catch (e) {
  console.error(e);
}
