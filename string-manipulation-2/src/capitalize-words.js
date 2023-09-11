/* exported capitalizeWords */
function capitalizeWords(string) {
  const emptyString = string.split(' ');

  for (let i = 0; i < emptyString.length; i++) {
    emptyString[i] =
      emptyString[i][0].toUpperCase() + emptyString[i].substr(1).toLowerCase();
  }

  return emptyString.join(' ');
}
