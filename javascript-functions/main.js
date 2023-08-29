function convertMinutesToSeconds(minutes) {
  const totalSeconds = minutes * 60;
  console.log(totalSeconds);
}

convertMinutesToSeconds(5);

function greet(name) {
  const greeting = 'Hey, ' + name;
  console.log(greeting);
}

greet('beavis');

function getArea(width, height) {
  const totalArea = width * height;
  console.log(totalArea);
}

getArea(30, 20);

function getFirstName(person) {
  console.log(person.firstName);
}

getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });

function getLastElement(array) {
  const lastElement = array[array.length - 1];
  console.log(lastElement);
}

getLastElement(['propane', 'and', 'propane', 'accessories']);
