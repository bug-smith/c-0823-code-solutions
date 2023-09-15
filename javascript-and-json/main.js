const arr = [
  {
    isbn: '9781234567897',
    title: 'Bugs Life Events',
    author: 'Bug Smith',
  },
  {
    isbn: '97812345677832',
    title: 'Life is cool',
    author: 'JT',
  },
  {
    isbn: '82673434567897',
    title: 'Volcanos suck',
    author: 'Random',
  },
];

console.log(arr);
console.log('typeof', typeof arr);

const jsonArr = JSON.stringify(arr);

console.log(jsonArr);
console.log('typeof', typeof jsonArr);

const jsonString = '{"Number id": 456, "name": "Bug Smith"}';

console.log('string', jsonString);
console.log('typeof string', typeof jsonString);
