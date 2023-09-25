const $h1 = document.querySelector('h1');

function textContent() {
  $h1.textContent = 'Hello There';
}

setTimeout(textContent, 2000);
