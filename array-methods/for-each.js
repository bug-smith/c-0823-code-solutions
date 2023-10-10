const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((element) => {
  console.log(element);
});

console.log('reversed');
values.forEach((element, index, array) => {
  const indexReversed = array.length - 1 - index;
  console.log(array[indexReversed]);
});
