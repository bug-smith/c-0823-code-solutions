/* exported getWords */
function getWords(string) {
  const words = string.split(' ');
  words.push();

  if (string.length === 0) {
    return [];
  }

  return words;
}
