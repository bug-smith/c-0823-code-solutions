const valueOf = 'value of:';
const color = ['red', 'white', 'blue'];

console.log('value of colors[0] is:', color[0]);
console.log('value of colors[1] is:', color[1]);
console.log('value of colors[2] is:', color[2]);

console.log(
  'America is',
  color[0] + ', ' + color[1] + ', ' + 'and ' + color[2] + '.'
);

color.splice(2, 1, 'green');

console.log('Mexico is', color[0] + ', ' + color[1] + ' and ' + color[2] + '.');

console.log(valueOf, color);

const students = ['bug', 'justin', 'lauren', 'momma d'];

const numberOfStudents = students.length;

console.log('There are', numberOfStudents + ' students in the class.');

const lastIndex = students.at(-1);

console.log('The last student in the array is', lastIndex);

console.log(valueOf, students);
