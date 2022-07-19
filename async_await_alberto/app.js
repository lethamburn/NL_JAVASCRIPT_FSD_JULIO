// Tener el EndPoint o URL de la API
const URL = "https://rickandmortyapi.com/api/character/";
let previousCharacters = ""

// Lanzar cuando se cargue la ventana
window.onload = () => {
  // Función disparadora
  init();
}

const init = async () => {
  // Lanzar la función que obtiene los datos de la API
  const characters = await getCharacters();
  // Lanzar la función que formatea los datos de la API
  mappedCharacters(characters);
}


const getCharacters = async () => {

  try {
    // Lanzar la petición a la API
    const result = await fetch(URL);
    // Cambiar formato
    const resultToJson = await result.json();
    // Retornar el resultado
    return resultToJson;
  } catch (error) {
    printError(error);
  }

}


const mappedCharacters = async (characters) => {
  // Asignar - la siguiente peticion
  previousCharacters = characters.info.next;
  // Mappear los datos de la API
  characters.results.map((character) => {
    // Función de pintado
    return printCharacter({
      name: character.name,
      image: character.image,
      origin: character.origin.name,
      species: character.species,
    });
  })
}


const printCharacter = async (character) => {
  // Selector query - id
  const container = document.querySelector("#characters");
  // Crear un elemento HTML e insertarlo
  container.innerHTML += `
    <li>
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>${character.origin}</p>
      <p>${character.species}</p>
    </li>
  `
}

const nextCharacters = async () => {
  if (previousCharacters) {
    const result = await fetch(previousCharacters);
    const resultToJson = await result.json();
    mappedCharacters(resultToJson);
  }
}


const printError = (err) => {
  const error = document.querySelector("#error");
  error.innerHTML += `
  <h1>${err.message}</h1>`
}