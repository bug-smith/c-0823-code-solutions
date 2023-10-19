import { readFile, writeFile } from 'node:fs/promises';

const [, , op, ...args] = process.argv;
try {
  if (op === 'read') {
    readNotes();
  }
  if (op === 'create') {
    addNote(args.join(' '));
  }
  if (op === 'update') {
    reviseNote(args[0], args.splice(1).join(' '));
  }
  if (op === 'delete') {
    deleteNote(args[0]);
  }
} catch (e) {
  console.error(e);
  process.exit(1);
}

async function readNotes() {
  const data = await readFile('data.json', 'utf8');
  const parsedData = JSON.parse(data);
  for (const [id, notes] of Object.entries(parsedData.notes)) {
    console.log(`${id}: ${notes}`);
  }
}

async function addNote(note) {
  const data = await readFile('data.json', 'utf8');
  const parsedData = JSON.parse(data);
  const dataId = parsedData.nextId;
  parsedData.notes[dataId] = note;
  parsedData.nextId++;
  const updatedData = JSON.stringify(parsedData, null, 2);
  writeFile('data.json', updatedData, 'utf8');
}

async function reviseNote(id, note) {
  const data = await readFile('data.json', 'utf8');
  const parsedData = JSON.parse(data);

  if (parsedData.notes[id]) {
    parsedData.notes[id] = note;
    const updatedData = JSON.stringify(parsedData, null, 2);
    writeFile('data.json', updatedData, 'utf8');
  }
}

async function deleteNote(id) {
  const data = await readFile('data.json', 'utf8');
  const parsedData = JSON.parse(data);

  if (parsedData.id[id]) {
    delete parsedData.notes[id];
    const updatedData = JSON.stringify(parsedData, null, 2);
    writeFile('data.json', updatedData, 'utf8');
  }
}
