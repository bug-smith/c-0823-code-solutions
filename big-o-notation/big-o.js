/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // 1 * 1 = O(1)
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(n)
    i++ // 2 * n = O(n)
  ) {
    const word = words[i]; // 2 * n = O(n)
    if (!seen[word]) {
      // 2 * n = O(n)
      seen[word] = true; // 2 * n = O(n)
      unique[unique.length] = word; // 2 * n = O(n)
    }
  }
  return unique; // 1 * 1 = O(n)
} // Big O Notation for uniqueLinear: O(2n)

function uniqueQuadratic(words) {
  const unique = []; // 1 * 1 = O(?)
  for (
    let i = 0; // 1 * 1 = O(?)
    i < words.length; // 2 * n = O(?)
    i++ // 2 * n = O(?)
  ) {
    const word = words[i]; // 2 * n = O(?)
    let isUnique = true; // 1 * n = O(?)
    for (
      let c = 0; // 1 * n = O(?)
      c < i; // 1 * n * n = O(?)
      c++ // 2 * n * n = O(?)
    ) {
      const comparing = words[c]; // 2 * n * n = O(?)
      if (comparing === word) {
        // 1 * n * n = O(?)
        isUnique = false; // 1 * n * n = O(?)
      }
    }
    if (isUnique) {
      // 1 * n = O(?)
      unique[unique.length] = word; // 2 * n = O(?)
    }
  }
  return unique; // 1 * 1 = O(?)
} // Big O Notation for uniqueQuadratic: O(n^2)
