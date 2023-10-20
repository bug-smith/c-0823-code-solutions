import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

type NextId = number;

const grades: Record<number, Grade> = {};

let nextId: NextId = 1;

const app = express();

app.get('/api/grades', (req, res) => {
  const localArr: Grade[] = Object.values(grades);
  res.json(localArr);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const grade = req.body;
  grade.id = nextId;
  grades[nextId] = grade;
  nextId++;

  if (
    typeof !grade.name === 'string' ||
    typeof !grade.course === 'string' ||
    typeof !grade.score === 'number'
  ) {
    res.status(204);
  }
  res.json(grade);
  res.send();
});

app.listen('8080', () => {
  console.log('server is listening');
});
