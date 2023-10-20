import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('Request Type:', req.method);
  res.send('Hello World');
  next();
});

app.listen('8080', () => {
  console.log('server is listening');
});
