import { readFile } from 'node:fs/promises';

async function catFiles() {
  const filenames = process.argv.slice(2);

  try {
    const ps = filenames.map(
      async (filename) => await readFile(filename, 'utf8')
    );
    const contents = await Promise.all(ps);
    console.log(contents.join('\n'));
  } catch (err) {
    console.log(err);
  }
}

catFiles();
