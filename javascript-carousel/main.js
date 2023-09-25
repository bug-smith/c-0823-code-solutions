const $img = document.querySelector('.image');
const $circles = document.querySelector('.circles');
const $c1 = document.querySelector('#c1');
const $c2 = document.querySelector('#c2');
const $c3 = document.querySelector('#c3');
const $c4 = document.querySelector('#c4');
const $c5 = document.querySelector('#c5');

let imageNum = 5;

function imageStep() {
  imageNum--;
  if (imageNum === 4) {
    $img.setAttribute('src', 'images/004.png');
    $c1.setAttribute('class', 'fa-regular fa-circle');
    $c2.setAttribute('class', 'fa-solid fa-circle');
    $c3.setAttribute('class', 'fa-regular fa-circle');
    $c4.setAttribute('class', 'fa-regular fa-circle');
    $c5.setAttribute('class', 'fa-regular fa-circle');
  } else if (imageNum === 3) {
    $img.setAttribute('src', 'images/007.png');
    $c1.setAttribute('class', 'fa-regular fa-circle');
    $c2.setAttribute('class', 'fa-regular fa-circle');
    $c3.setAttribute('class', 'fa-solid fa-circle');
    $c4.setAttribute('class', 'fa-regular fa-circle');
    $c5.setAttribute('class', 'fa-regular fa-circle');
  } else if (imageNum === 2) {
    $img.setAttribute('src', 'images/025.png');
    $c1.setAttribute('class', 'fa-regular fa-circle');
    $c2.setAttribute('class', 'fa-regular fa-circle');
    $c3.setAttribute('class', 'fa-regular fa-circle');
    $c4.setAttribute('class', 'fa-solid fa-circle');
    $c5.setAttribute('class', 'fa-regular fa-circle');
  } else if (imageNum === 1) {
    $img.setAttribute('src', 'images/039.png');
    $c1.setAttribute('class', 'fa-regular fa-circle');
    $c2.setAttribute('class', 'fa-regular fa-circle');
    $c3.setAttribute('class', 'fa-regular fa-circle');
    $c4.setAttribute('class', 'fa-regular fa-circle');
    $c5.setAttribute('class', 'fa-solid fa-circle');
  } else {
    $img.setAttribute('src', 'images/001.png');
    $c1.setAttribute('class', 'fa-solid fa-circle');
    $c2.setAttribute('class', 'fa-regular fa-circle');
    $c3.setAttribute('class', 'fa-regular fa-circle');
    $c4.setAttribute('class', 'fa-regular fa-circle');
    $c5.setAttribute('class', 'fa-regular fa-circle');
    clearInterval(imageStepID);
  }
}

const imageStepID = setInterval(imageStep, 3000);

$circles.addEventListener('click', function (event) {
  if (event.target.getAttribute('id') === 'c1') {
    $img.setAttribute('src', 'images/001.png');
    $c1.setAttribute('class', 'fa-solid fa-circle');
    $c2.setAttribute('class', 'fa-regular fa-circle');
    $c3.setAttribute('class', 'fa-regular fa-circle');
    $c4.setAttribute('class', 'fa-regular fa-circle');
    $c5.setAttribute('class', 'fa-regular fa-circle');
  } else if (event.target.getAttribute('id') === 'c2') {
    $img.setAttribute('src', 'images/004.png');
    $c1.setAttribute('class', 'fa-regular fa-circle');
    $c2.setAttribute('class', 'fa-solid fa-circle');
    $c3.setAttribute('class', 'fa-regular fa-circle');
    $c4.setAttribute('class', 'fa-regular fa-circle');
    $c5.setAttribute('class', 'fa-regular fa-circle');
  } else if (event.target.getAttribute('id') === 'c3') {
    $img.setAttribute('src', 'images/007.png');
    $c1.setAttribute('class', 'fa-regular fa-circle');
    $c2.setAttribute('class', 'fa-regular fa-circle');
    $c3.setAttribute('class', 'fa-solid fa-circle');
    $c4.setAttribute('class', 'fa-regular fa-circle');
    $c5.setAttribute('class', 'fa-regular fa-circle');
  } else if (event.target.getAttribute('id') === 'c4') {
    $img.setAttribute('src', 'images/025.png');
    $c1.setAttribute('class', 'fa-regular fa-circle');
    $c2.setAttribute('class', 'fa-regular fa-circle');
    $c3.setAttribute('class', 'fa-regular fa-circle');
    $c4.setAttribute('class', 'fa-solid fa-circle');
    $c5.setAttribute('class', 'fa-regular fa-circle');
  } else if (event.target.getAttribute('id') === 'c5') {
    $img.setAttribute('src', 'images/039.png');
    $c1.setAttribute('class', 'fa-regular fa-circle');
    $c2.setAttribute('class', 'fa-regular fa-circle');
    $c3.setAttribute('class', 'fa-regular fa-circle');
    $c4.setAttribute('class', 'fa-regular fa-circle');
    $c5.setAttribute('class', 'fa-solid fa-circle');
  }
});
