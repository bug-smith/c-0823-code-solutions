/* exported truncate */
function truncate(length, string) {
  let finalString = '';
  finalString = string.slice(0, length) + '...';
  return finalString;
}
