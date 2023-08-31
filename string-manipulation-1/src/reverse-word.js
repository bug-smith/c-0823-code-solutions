/* exported reverseWord */
function reverseWord(word) {
  let blank = '';
  for (let i = word.length - 1; i >= 0; i--) {
    blank += word[i];
  }
  return blank;
}
