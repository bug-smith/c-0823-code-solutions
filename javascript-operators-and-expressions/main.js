const valueOf = 'value of';
const typeOf = 'typeof';

const width = 3;
const height = 4;
const area = width * height;

const bill = 38;
const payment = 50;
const change = payment - bill;

const quizzes = 85;
const midterm = 90;
const final = 95;
const grade = (quizzes + midterm + final) / 3;

const firstName = 'Bug';
const lastName = 'Smith';
const fullName = firstName + ' ' + lastName;

const pH = 7;
const isAcidic = pH <= 6.99;

const headCount = 300;
const isSparta = headCount === 300;

let motto = firstName;
motto += ' is the GOAT';

console.log(valueOf, 'area:', area);
console.log(typeOf, 'area:', typeof area);

console.log(valueOf, 'change:', change);
console.log(typeOf, 'change:', typeof change);

console.log(valueOf, 'grade:', grade);
console.log(typeOf, 'grade:', typeof grade);

console.log(valueOf, 'fullName:', fullName);
console.log(typeOf, 'fullName:', typeof fullName);

console.log(valueOf, 'isAcidic:', isAcidic);
console.log(typeOf, 'isAcidic:', typeof isAcidic);

console.log(valueOf, 'isSparta:', isSparta);
console.log(typeOf, 'isSparta:', typeof isSparta);

console.log(valueOf, 'motto:', motto);
console.log(typeOf, 'motto:', typeof motto);
