async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
if (!response.ok){
  new Error(`The reponse was unsucessful with the status Code - ${reponse.status}`)
}
  try {
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(Error);
  }
}

async function pokeData() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/1')
  if (!response.ok){
    new Error(`The reponse was unsucessful with the status Code - ${reponse.status}`);
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
