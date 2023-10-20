import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {};

let nextId = 1;

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const localArr: Grade[] = Object.values(grades);
  res.json(localArr);
});

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  if (
    typeof !grade.name === 'string' ||
    typeof !grade.course === 'string' ||
    typeof !grade.score === 'number'
  ) {
    res.sendStatus(400);
    return;
  }
  grade.id = nextId;
  grades[nextId] = grade;
  nextId++;
  res.json(grade);
});

app.listen('8080', () => {
  console.log('server is listening');
});
