function ExampleConstructor() {}

console.log('value of example', ExampleConstructor.prototype);
console.log('example', typeof example);

const exampleNew = new ExampleConstructor();

console.log(exampleNew);

console.log(exampleNew instanceof ExampleConstructor);
