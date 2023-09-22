const $letter = document.querySelectorAll('letter');
let currentLetterStart = 0;

document.addEventListener('keydown', function (event) {
  if (currentLetterStart < $letter.length) {
    const currentLetter = $letter[currentLetterStart];
    const keyPress = event.key.toLocaleLowerCase();

    if (currentLetter.textContent.toLocaleLowerCase() === keyPress) {
      currentLetter.classList.add('correct');
    } else {
      currentLetter.classList.add('incorrect');
    }
    currentLetterStart++;
  }
});
