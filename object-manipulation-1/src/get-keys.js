/* exported getKeys */
function getKeys(object) {
  // gets key of object
  // const obj = {} // blank object to
  const arr = [];
  for (const key in object) {
    arr.push(key);
  }
  return arr;
}
