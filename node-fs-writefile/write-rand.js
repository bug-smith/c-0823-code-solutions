import { writeFile } from 'node:fs/promises';

try {
  const randomNumber = Math.random();
  const numberString = randomNumber.toString() + '\n';
  await writeFile('random.txt', numberString);
  console.log(randomNumber);
} catch (e) {
  console.error(e);
}
