/* exported includesSeven */
function includesSeven(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(array[i]);
    if (arr[i] === 7) {
      return true;
    }
  }
  return false;
}
