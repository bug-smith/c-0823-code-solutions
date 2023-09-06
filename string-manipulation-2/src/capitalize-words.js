/* exported capitalizeWords */
function capitalizeWords(string) {
  let emptyString = '';
  const cappedLetter = string.toLowerCase().slice(1);
  emptyString = string.charAt(0).toUpperCase() + cappedLetter;
  return emptyString;
}
