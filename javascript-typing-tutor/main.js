const letters = document.querySelectorAll('.letter');
let currentLetterIndex = 0;

document.addEventListener('keydown', function (event) {
  if (currentLetterIndex < letters.length) {
    const currentLetter = letters[currentLetterIndex];
    const pressedKey = event.key.toLowerCase();

    if (pressedKey === 'backspace') {
      if (currentLetterIndex > 0) {
        currentLetterIndex--; // Move back one step
        const prevLetter = letters[currentLetterIndex];
        prevLetter.classList.remove('correct', 'incorrect');
      }
    } else if (currentLetter.textContent.toLowerCase() === pressedKey) {
      currentLetter.classList.remove('incorrect');
      currentLetter.classList.add('correct');
      currentLetterIndex++;
    } else {
      currentLetter.classList.add('incorrect');
    }
  }
});
