const $userList = document.querySelector('#user-list');

function getUserData(user) {
  const xhr = new XMLHttpRequest();
  xhr.open(
    'GET'
    // 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=breakfast&number=10'
  );
  xhr.responseType = 'json';
  xhr.setRequestHeader(
    'X-RapidAPI-Key',
    'a40bcbcd8bmshfdf8d28517d81c7p1adb7ajsnc0278fb5d147'
  );
  xhr.setRequestHeader(
    'X-RapidAPI-Host',
    'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  );

  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (let i = 0; i < xhr.response.recipes.length; i++) {
      const $li = document.createElement('li');
      $li.setAttribute('src', xhr.response.recipes[i].image);
      $userList.appendChild($li);
    }
  });
  xhr.send();
}

getUserData();
