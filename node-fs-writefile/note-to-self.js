import { writeFile } from 'node:fs/promises';

const [, , ...args] = process.argv;

try {
  const data = args + '\n';
  await writeFile('note.txt', data);
  console.log('note has been updated');
} catch (e) {
  console.error(e);
}
