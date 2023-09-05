/* exported capitalizeWord */
function capitalizeWord(word) {
  let firstLetter = '';
  let remainingLetter = '';
  firstLetter = word.charAt([0]).toUpperCase([0]);
  remainingLetter = word.slice(1, word.length).toLowerCase();
  const finalWord = firstLetter + remainingLetter;

  return finalWord;
}
