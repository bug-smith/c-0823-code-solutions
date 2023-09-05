/* exported capitalizeWord */
function capitalizeWord(word) {
  let firstLetter = '';
  let remainingLetter = '';
  let finalWord = '';
  if (word.toLowerCase() === 'javascript') {
    finalWord = 'JavaScript';
  } else {
    firstLetter = word.charAt([0]).toUpperCase([0]);
    remainingLetter = word.slice(1, word.length).toLowerCase();
    finalWord = firstLetter + remainingLetter;
  }
  return finalWord;
}
