import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.static('public'));
app.listen(8080, () => {
  console.log('server is listening');
});
