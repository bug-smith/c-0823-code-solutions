let clickNumber = 0;

const $button = document.querySelector('.hot-button');

const $click = document.querySelector('.click-count');

$button.addEventListener('click', function (event) {
  clickNumber++;
  $click.innerHTML = 'Clicks:' + clickNumber;
  if (clickNumber < 4) {
    $button.setAttribute('class', 'hot-button cold');
  } else if (clickNumber < 7) {
    $button.setAttribute('class', 'hot-button cool');
  } else if (clickNumber < 10) {
    $button.setAttribute('class', 'hot-button tepid');
  } else if (clickNumber < 13) {
    $button.setAttribute('class', 'hot-button warm');
  } else if (clickNumber < 16) {
    $button.setAttribute('class', 'hot-button hot');
  } else {
    $button.setAttribute('class', 'hot-button nuclear');
  }
});
