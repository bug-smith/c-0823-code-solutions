/* exported isLowerCased */
function isLowerCased(word) {
  const string = word;
  const stringLower = string.toLowerCase();
  if (string === stringLower) {
    return true;
  }
  return false;
}
