const letters = document.querySelectorAll('.letter');
let currentLetterIndex = 0;

document.addEventListener('keydown', function (event) {
  if (currentLetterIndex < letters.length) {
    let currentLetter = letters[currentLetterIndex];
    const pressedKey = event.key.toLowerCase();

    if (pressedKey === 'backspace') {
      if (currentLetterIndex > 0) {
        const prevLetter = letters[currentLetterIndex];
        currentLetter.setAttribute('class', 'letter');
        currentLetter.classList.remove('underline');
        prevLetter.classList.remove('correct', 'incorrect');
        currentLetter--;
      }
    } else if (currentLetter.textContent.toLowerCase() === pressedKey) {
      currentLetter.classList.remove('incorrect');
      currentLetter.classList.add('correct', 'underline');
      currentLetter.classList.add('correct');
      currentLetterIndex++;
    } else {
      currentLetter.classList.add('incorrect');
    }
  }
});
