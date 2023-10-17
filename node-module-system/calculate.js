import sum from './add.js';
import subtract from './subtract.js';
import multiplication from './multiply.js';
import division from './divide.js';

const [, , n1, operator, n2] = process.argv;

const num1 = Number(n1);

const num2 = Number(n2);

if (isNaN(num1)) {
  console.error('not a number', n1);
  process.exit(1);
}
if (isNaN(num2)) {
  console.error('not a number', n2);
  process.exit(1);
}

let result;

switch (operator) {
  case 'plus':
    result = sum(num1, num2);
    break;
  case 'minus':
    result = subtract(num1, num2);
    break;
  case 'over':
    result = division(num1, num2);
    break;
  case 'times':
    result = multiplication(num1, num2);
    break;
  default:
    console.error('Unknown operator', operator);
    process.exit(1);
}

console.log(result);
