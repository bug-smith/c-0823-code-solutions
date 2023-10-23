import express from 'express'
import { readFile, writeFile} from 'node:fs/promises'


type Note = {
  id: number,
  content: string,
}

type Data = {
  nextId: number,
  notes: Record<number, Note>
}
const notes: { [key: number]: Note } = {};
const dataNextId = 1

async function readData() : Promise<Data> {
  const data = await readFile('data.json', 'utf8')
  return JSON.parse(data)
}

async function writeData (data: Data): Promise<void> {
  const value = JSON.stringify(data, null, 2)
  await writeFile('data.json', value, 'utf8')
}

const app = express()


app.use(express.json())

app.get('/api/notes/', async (req, res) => {
const data = await readData()
const notes: Note[] = []
for (const id in data.notes){
  notes.push(data.notes[id])
}
res.json(data)
})


app.get('/api/notes/:id', async (req, res) => {
  const data = await readData()
  const { id } = req.params
  res.json(data.notes[+id])
});


app.post('/api/notes', async (req, res)=>{
    const data = await readData();
    const { content } = req.body
    const newNote = {
      id: data.nextId,
      content,
    }
    data.notes[data.nextId++] = newNote
    await writeData(data)
    res.status(201).json()
})

app.put('/api/notes/:id', async (req, res) =>{
    const data = await readData();
    const { id } = req.params;
    const { content } = req.body
    const note = {
      id: +id,
      content,
    }
    data.notes[+id] = note
    await writeData(data)
    res.json(note)
}
)

app.delete('/api/notes/:id', async (req, res) => {
    const data = await readData();
    const { id } = req.params;
    delete data.notes[+id]
    await writeData(data)
    res.sendStatus(400)
})



app.listen('8080', () => {
  console.log('server is listening')
})

readData()


// first thing is layout the routes, think about how many is needed.

// import read and write, decalre express obj

// routes:
// to get all is
