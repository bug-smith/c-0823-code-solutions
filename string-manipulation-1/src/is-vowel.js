/* exported isVowel */
function isVowel(char) {
  switch (char) {
    case 'a':
    case 'A':
    case 'e':
    case 'E':
    case 'i':
    case 'I':
    case 'o':
    case 'O':
    case 'u':
    case 'U':
      return true;
  }
  return false;
}
