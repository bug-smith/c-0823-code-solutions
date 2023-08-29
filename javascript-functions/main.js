function convertMinutesToSeconds(minutes) {
  const totalSeconds = minutes * 60;
  return totalSeconds;
}

console.log(convertMinutesToSeconds(5));

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}

console.log(greet('Beavis'));

function getArea(width, height) {
  const totalArea = width * height;
  return totalArea;
}

console.log(getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  const lastElement = array[array.length - 1];
  return lastElement;
}

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
