/* exported isUpperCased */
function isUpperCased(word) {
  const string = word;
  const stringCap = string.toUpperCase();
  if (string === stringCap) {
    return true;
  }
  return false;
}
