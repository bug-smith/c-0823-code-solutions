const $modal = document.querySelector('#b1');
const $survey = document.querySelector('#b2');

const $container2 = document.querySelector('.container2.hide');
console.log($container2);

$modal.addEventListener('click', function (event) {
  $container2.className = 'container2';
});

$survey.addEventListener('click', function (event) {
  $container2.className = 'container2 hide';
});
