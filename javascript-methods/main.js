const numberOne = 7;
const numberTwo = 10;
const numberThree = 35;
const maximumValue = Math.max(numberOne, numberTwo, numberThree);

console.log('maximumValue:', maximumValue);

const heroes = ['Superman', 'Batman', 'Robin', 'Green Arrow'];

let randomNumber = Math.random(heroes);
randomNumber = randomNumber * heroes.length - 1;

const randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

const arr = [
  {
    title: 'Holes',
    author: 'Louis Sachar',
  },
  {
    title: 'The Making of the Atomic Bomb',
    author: 'Richard Rhodes',
  },
  {
    title: 'Bugs Journal',
    author: 'Bug',
  },
];

const library = arr;

const lastBook = library.pop();

console.log('lastBook:', lastBook);

const firstBook = library.shift();

console.log('firstBook:', firstBook);

const js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);

library.unshift(css);

library.splice(2);

console.log('library:', library);

const fullName = 'Bug Smith';

const firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
