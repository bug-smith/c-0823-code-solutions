const $name = document.querySelector('#user-name');
const $email = document.querySelector('#user-email');
const $text = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('event.target.name', event.target.name);
  console.log('focus event was fired');
}

function handleBlur(event) {
  console.log('blur', event.target.name);
  console.log('blur event was fired');
}

function handleInput(event) {
  console.log('event target name', event.target.name);
  console.log('event.target.value', event.target.value);
}

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$text.addEventListener('focus', handleFocus);
$text.addEventListener('blur', handleBlur);
$text.addEventListener('input', handleInput);
