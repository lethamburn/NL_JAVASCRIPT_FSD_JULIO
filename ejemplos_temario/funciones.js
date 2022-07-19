//FUNCION TRADICIONAL
//Declarando la función
function greeting() {
  console.log("Hola");
}

//Ejecutando la función
greeting();

//ARROW
const greetingArrow = () => {
  console.log("Hola");
};

greetingArrow();

//#1
const greetingReturn = () => {
  return "Hola";
};

const saludo = greetingReturn();
console.log("Resultado de la ejecución #1 ->", saludo);

//#2
const greetingWithName = (name) => {
  return `Hola ${name}`;
};

const saludoConNombre = greetingWithName("Peter");
console.log("Resultado de la ejecución #2 -> ", saludoConNombre);

//#3
const greetingWithNameAndAge = (name, age) => {
  return `Hello, my name is ${name} and I'm ${age} years old.`;
};

const saludoConNombreYEdad = greetingWithNameAndAge("Peter", 32);
console.log("Resultado de la ejecución #3 -> ", saludoConNombreYEdad);

//#4
//Se le pueden dar valores por defecto a los argumentos de una función, si no le indicamos lo contrario en la ejecución cogerá este valor
const greetingWithNameAndAgeCalculator = (
  name,
  bornYear,
  actualYear = 2022
) => {
  const age = actualYear - bornYear;
  return `Hello, my name is ${name} and I'm ${age} years old.`;
};

const saludoCalculado = greetingWithNameAndAgeCalculator("Peter", 1993);
const saludoCalculadoConArgs = greetingWithNameAndAgeCalculator(
  "Peter",
  1993,
  2023
);
console.log("#4", saludoCalculado);
console.log("#4", saludoCalculadoConArgs);

//#5
const ageCalculator = (actualYear, bornYear) => {
  return actualYear - bornYear;
};

const fullNameGenerator = (name, surname) => {
  return name + " " + surname;
};

const nameAndAgeGenerator = (name, surname, actualYear, bornYear) => {
  const fullName = fullNameGenerator(name, surname);
  const age = ageCalculator(actualYear, bornYear);
  return `Hello, my name is ${fullName}, and I'm ${age} years old.`;
};

const resultNameAndAge = nameAndAgeGenerator("Peter", "Parker", 2022, 1990);
const resultNameAndAge2 = nameAndAgeGenerator("Pedro", "Lérida", 2022, 1993);
console.log("#5", resultNameAndAge);
console.log("#5", resultNameAndAge2);

//#6
const paises = ["Italia", "Francia", "Cuba", "Argentina"];
const peliculas = ["Titanic", "Star Wars", "Casino", "Enemy"];

const iterateArray = (array) => {
  for (const element of array) {
    console.log("#6 - Elemento del array:", element);
  }
};

iterateArray(paises);
iterateArray(peliculas);

//#7
const superheroes = [
  {
    name: "Spiderman",
    age: 25,
    location: "Queens",
    image: "https://m.media-amazon.com/images/I/51TaEmbkbVL.jpg",
  },
  {
    name: "Iron Man",
    age: 67,
    location: "New York",
    image:
      "https://i.pinimg.com/564x/85/b5/5a/85b55a96eed2e10634b687211ff715b7.jpg",
  },
  {
    name: "Iron Man",
    age: 67,
    location: "New York",
    image:
      "https://i.pinimg.com/564x/85/b5/5a/85b55a96eed2e10634b687211ff715b7.jpg",
  },
  {
    name: "Iron Man",
    age: 67,
    location: "New York",
    image:
      "https://i.pinimg.com/564x/85/b5/5a/85b55a96eed2e10634b687211ff715b7.jpg",
  },
  {
    name: "Iron Man",
    age: 67,
    location: "New York",
    image:
      "https://i.pinimg.com/564x/85/b5/5a/85b55a96eed2e10634b687211ff715b7.jpg",
  },
  {
    name: "Iron Man",
    age: 67,
    location: "New York",
    image:
      "https://i.pinimg.com/564x/85/b5/5a/85b55a96eed2e10634b687211ff715b7.jpg",
  },
  {
    name: "Manolito Manzanas",
    age: 55,
    location: "Jerez",
    image:
      "https://i.pinimg.com/564x/85/b5/5a/85b55a96eed2e10634b687211ff715b7.jpg",
  },
];
const villanos = [
  {
    name: "Venom",
    age: 38,
    location: "New York",
    image:
      "https://cdnb.artstation.com/p/assets/images/images/013/652/557/large/annndres-cm-venom2.jpg?1540571117",
  },
  {
    age: 87,
    location: "New York",
    image:
      "https://i.pinimg.com/736x/5a/65/21/5a6521e69e46ed469597212abcad0224.jpg",
  },
];

//1.Recuperar los nodos de html
//2.Recorrer los elementos -> arrays
//3.Generar HTML -> Crear una etiqueta con toda la ficha
//4.Pintarlos en el documento

//1.
const supersContainer = document.querySelector("#superscontainer");
const villainsContainer = document.querySelector("#villainscontainer");

//2.
const iterateList = (list, container) => {
  for (const element of list) {
    generateHTML(element, container);
  }
};

//3.
const generateHTML = (element, container) => {
  let myFigure;
  //Con este condicional desacoplamos para comprobar si existe x clave en un objeto
  if ("name" in element) {
    myFigure = `<figure>
    <h2>${element.name}</h2>
    <img src="${element.image}" alt="${element.name}" width="200px" />
    </figure>`;
    } else {
      myFigure = `<figure>
      <h2>Unknown</h2>
      <img src="https://thumbs.dreamstime.com/z/default-avatar-profile-flat-icon-social-media-user-vector-portrait-unknown-human-image-default-avatar-profile-flat-icon-184330869.jpg" alt="Unknown" width="200px" />
      </figure>`;
  }

  printToDocument(container, myFigure);
};

//4.
const printToDocument = (container, element) => {
  container.innerHTML += element;
};

//Solo se está ejecutando esta función
iterateList(superheroes, supersContainer);
iterateList(villanos, villainsContainer);
