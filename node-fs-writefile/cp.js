import { readFile, writeFile } from 'node:fs/promises';

try {
  const promise = process.argv[2];
  const reading = await readFile(promise, 'utf8');
  console.log(reading);
  await writeFile('');
} catch (e) {
  console.error(e);
}
