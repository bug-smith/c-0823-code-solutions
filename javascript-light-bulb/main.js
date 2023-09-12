const $button = document.querySelector('.light-button');
const $container = document.querySelector('.light-container');

$button.addEventListener('click', function (event) {
  if ($button.className === 'light-button') {
    $container.className = 'dark-container';
    $button.className = 'dark-button';
  } else {
    $container.className = 'light-container';
    $button.className = 'light-button';
  }
});
