const $h1 = document.querySelector('h1');

let countdown = 4;

const intervalID = setInterval(countDown, 1000);

function countDown() {
  if (countdown > 0) {
    countdown--;
    $h1.textContent = countdown;
  } else {
    $h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
