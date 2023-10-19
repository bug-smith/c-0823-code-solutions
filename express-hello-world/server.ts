import express from 'express';
// import { listenerCount } from 'process'

const app = express();

app.use((req, res, next) => {
  console.log('Request Type:', req.method);
  next();
  res.send('Hello World');
});

app.listen('8080', () => {
  console.log('server is listening');
});