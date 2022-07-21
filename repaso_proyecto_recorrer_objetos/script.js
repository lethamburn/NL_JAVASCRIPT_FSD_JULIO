//Recuperar el contenedor de mi HTML donde quiero pintar los datos
const charactersDiv = document.querySelector("#container");
//Almacenamos la URL que queremos atacar
const URL = "https://rickandmortyapi.com/api/character";

//Esta función va a arrancar todas las demás
const start = () => {
  getCharacters();
};

const getCharacters = async () => {
  //Nos traemos los datos crudos de la API
  const datosCrudos = await fetch(URL);
  //Traducimos los datos crudos a JSON para poder trabajar con ellos con arrays, objetos y etc...
  const datosJSON = await datosCrudos.json();
  //Con este paso extra almacenamos solo los personajes, que en el caso de esta API estan en results
  //IMPORTANTE EXPLORAR LA API PARA VER DONDE ESTAN LAS COSAS, QUE SON TODAS DIFERENTES
  const charactersJSON = datosJSON.results;
  //Mapeamos estos characters para quedarnos con x informacion y con x claves que le digamos
  mapCharacters(charactersJSON);
};

const mapCharacters = (characters) => {
  //Generamos una nueva lista que van a ser los characters originales pero mapeados y con los campos que yo quiero. Por cada uno de los character me vas a hacer un objeto nuevo con las propiedades originales que seleccionemos
  //El mapeo genera un array nuevo pero con objetos customizados y le vamos a indicar lo que queremos conservar
  const mappedCharacters = characters.map((character) => ({
    nombre: character.name,
    especie: character.species,
    origen: character.origin.name,
    imagen: character.image,
  }));

  generateHTML(mappedCharacters);
};

//Vamos a generar un monton de divs por cada uno de los elementos de mi array mapeado con la informacion que he seleccionado
const generateHTML = (array) => {
  //Recorremos el array de mappedCharacters
  for (const item of array) {
    const myDiv = `<div>
    <h2>${item.nombre}</h2>
    <p>${item.especie}</p>
    <p>${item.origen}</p>
    <img src="${item.imagen}" alt="${item.nombre}" />
    </div>`;
    //Como estamos dentro de un bucle va a pintar en el contenedor gracias a la funcion paint cuantos divs genere cuantos personajes haya
    pintarElementos(myDiv);
  }
};

const pintarElementos = (elemento) => {
  //Cogemos el contenedor y le inyectamos el elemento
  charactersDiv.innerHTML += elemento;
};

//Solo ejecuto la función start y esta desencadenará en dominó todas las demas
start();
