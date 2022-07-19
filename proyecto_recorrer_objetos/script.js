//Definimos nuestro array de datos
const list = [
  {
    name: "Objeto 1",
    image:
      "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png",
    id: 1,
  },
  {
    name: "Objeto 2",
    image:
      "https://www.pngitem.com/pimgs/m/35-350426_profile-icon-png-default-profile-picture-png-transparent.png",
    id: 2,
  },
];

//Recuperamos la etiqueta de nuestro documento HTML
const divContainer = document.querySelector("#container");

//Iteramos el array
const iterateArray = (array, container) => {
  for (const item of array) {
    generateHTML(item, container);      
    //Ejecutamos dentro del bucle la función que genera el bloque de HTML
  }
};

//Generamos un bloque de HTML recuperando la información extraida de la iteración
const generateHTML = (item, container) => {
  const figure = `
    <figure>
        <h2>${item.name}</h2>
        <img src="${item.image}" alt="${item.name}" width="300px" />
        <p>${item.id}</p>
    </figure>`;
  print(figure, container);
  //Ejecutamos la función que pinta los elementos en 
};

//Pintamos los elementos que hemos generado en el contenedor que hemos creado
const print = (element, container) => {
  container.innerHTML += element;
};

//Ejecutamos la primera función que itera la lista, la cual desencadenará el resto de funciones tal como se indica en cada uno de los pasos
iterateArray(list, divContainer);
