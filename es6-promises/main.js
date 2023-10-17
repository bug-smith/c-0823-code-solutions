import takeAChance from './take-a-chance.js';

const name = takeAChance('bug');

name.then((val) => console.log(val));
name.catch((val) => console.log(val));
