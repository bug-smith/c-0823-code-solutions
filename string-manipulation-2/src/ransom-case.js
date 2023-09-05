/* exported ransomCase */
function ransomCase(string) {
  const stringSplit = string.split('');
  const newarr = [];
  for (let i = 0; i < stringSplit.length; i++)
    if (i % 2 === 0) {
      newarr.push(stringSplit[i].toLowerCase());
    } else {
      newarr.push(stringSplit[i].toUpperCase());
    }
  return newarr.join('');
}
