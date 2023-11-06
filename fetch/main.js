async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

async function pokeData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
  if (response.ok === 'false'){
    new Error('the reponse has failed error 404');
  }
  try {
    const pokeData = await response.json();
    console.log(pokeData);
    console.log(response);
  } catch (e) {
    console.error(Error);
  }
}

getData();
pokeData();
