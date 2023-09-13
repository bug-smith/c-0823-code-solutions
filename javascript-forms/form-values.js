const $form = document.querySelector('#contact-form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const obj = {
    name: $form.name.value,
    email: $form.email.value,
    message: $form.message.value,
  };
  console.log(obj);
  $form.reset();
});
