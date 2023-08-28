const student = {
  firstName: 'Bug',
  lastName: 'Smith',
  age: 24,
};
student.livesInIrvine = false;
student.previousOccupation = 'Finance stuff';

const fullName = student.firstName + ' ' + student.lastName;

console.log('value of:', fullName);

console.log('value of student:', student);
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
const vehicle = {
  make: 'volkswagen',
  model: 'Passat',
  year: '2014',
};

vehicle['color'] = 'Grey';
vehicle['isConvertible'] = false;

console.log('value of vehicle:', vehicle);
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);

const pet = {
  name: 'sunny',
  type: 'cat',
};

delete pet.name;
delete pet.type;

console.log('value of:', pet);
