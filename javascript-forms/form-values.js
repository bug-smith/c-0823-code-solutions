const $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const obj = $form.name.value + $form.email.value + $form.message.value;
  console.log(obj);
});
