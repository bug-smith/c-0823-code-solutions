/* exported capitalize */
function capitalize(word) {
  const string = word.slice(1).toLowerCase();
  const firstLetter = word.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  return firstLetterCap + string;
}
