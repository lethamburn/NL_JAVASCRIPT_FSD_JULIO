//DEFINIMOS NUESTROS ARRAYS DE DATOS
const users = [
  {
    name: "Miss Marvin Wiza",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1231.jpg",
    email: "Art32@yahoo.com"
  },
  {
    name: "Mrs. Garry Witting",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/364.jpg",
    email: "Verdie_Luettgen23@yahoo.com",
    active: true,
  },
  {
    name: "Patricia Schneider",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/996.jpg",
    email: "Fay.Emard@hotmail.com",
    active: true,
  },
  {
    name: "Daisy Hand",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/684.jpg",
    email: "Emory38@yahoo.com",
    active: true,
  },
  {
    name: "Stella Ritchie",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/562.jpg",
    email: "Trace.Pagac@gmail.com",
    active: true,
  },
  {
    name: "Clayton Smitham",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1229.jpg",
    email: "Mafalda_Prohaska22@hotmail.com",
    active: true,
  },
  {
    name: "Mrs. Beulah Turcotte",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
    email: "Jarrod_Daniel@yahoo.com",
    active: true,
  },
  {
    name: "Maxine Cruickshank",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/851.jpg",
    email: "Javonte.Kuphal74@gmail.com",
    active: true,
  },
  {
    name: "Eileen Roberts",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/285.jpg",
    email: "Margarita_Dicki@hotmail.com",
    active: true,
  },
  {
    name: "Ms. Glen Dickinson",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/601.jpg",
    email: "Joelle90@gmail.com"
  },
];
const animals = [
  {
    name: "Galgo Español",
    avatar: "http://loremflickr.com/640/480/animals",
    email: "Kasey_Shields94@example.com",
    active: true,
  },
  {
    name: "Cimarrón Uruguayo",
    avatar: "http://loremflickr.com/640/480/animals",
    email: "Wilfred_Considine45@example.org",
    active: true,
  },
  {
    name: "Sealyham Terrier",
    avatar: "http://loremflickr.com/640/480/animals",
    email: "Trisha94@example.org",
    active: true,
  },
  {
    name: "Shiloh Shepherd",
    avatar: "http://loremflickr.com/640/480/animals",
    email: "Jarred.Terry52@example.org",
    active: true,
  },
  {
    name: "Basset Bleu de Gascogne",
    avatar: "http://loremflickr.com/640/480/animals",
    email: "Yolanda61@example.net",
    active: true,
  },
  {
    name: "Sarabi dog",
    avatar: "http://loremflickr.com/640/480/animals",
    email: "Cory_Schulist40@example.org",
    active: true,
  },
  {
    name: "Volpino Italiano",
    avatar: "http://loremflickr.com/640/480/animals",
    email: "Eloy49@example.net",
    active: true,
  },
  {
    name: "Hierran Wolfdog",
    avatar: "http://loremflickr.com/640/480/animals",
    email: "Ava58@example.org",
    active: true,
  },
  {
    name: "Nova Scotia Duck Tolling Retriever",
    avatar: "http://loremflickr.com/640/480/animals",
    email: "Beaulah3@example.net",
    active: true,
  },
  {
    name: "Dogo Sardesco",
    avatar: "http://loremflickr.com/640/480/animals",
    email: "Jovany_Ullrich88@example.com"
  },
];

//1. Recuperar los divs contenedores del HTML
//2. Recorrer los arrays
//3. Generar un elemento de HTML
//4. Reflejar este elemento de HTML en el contenedor

//1. Recuperamos los contenedores de HTML
const usersContainer = document.querySelector("#users_container");
const animalsContainer = document.querySelector("#animals_container");

//2. Iteramos x lista mediante un bucle y sacamos los elementos individuales de ella. Además pasamos el contenedor para poder utilizarlo en el paso 4.
const iterateArrays = (list, container) => {
  for (const element of list) {
    //Por cada uno de los elementos individuales generamos un bloque de HTML, y además pasamos el contenedor a la siguiente función hasta llegar al paso 4.
    generateHTML(element, container);
  }
};

//3. Generamos por cada uno de los elementos del bucle del paso 2 un <figure> y pintamos las propiedades de cada uno de los objetos. Lo almacenamos en una constante para poder pasarla por argumento a la función del paso 4.
const generateHTML = (element, container) => {
  let myFigure;
  //Con este condicional comprobamos si cada uno de los objetos tiene la clave active, y si no la tiene myFigure va a ser vacio, por lo tanto no va a pintar nada
  if ("active" in element) {
    myFigure = `
    <figure>
    <h3>${element.name}</h3>
    <p>${element.email}</p>
    <img src="${element.avatar}" alt="${element.name}" />
    </figure>`;
  } else{
    myFigure = ``
  }

  //Le pasamos tanto el tag que vamos a pintar en el HTML como el contenedor que llevamos arrastrando desde el paso 1, porque esta es la función que lo va a utilizar
  print(myFigure, container);
};

//4. Nos traemos el tag de la función y le indicamos el contenedor donde la vamos a pintar con el metodo innerHTML.
const print = (figure, container) => {
  container.innerHTML += figure;
};

//EJECUTAR LA FUNCION PRINCIPAL
iterateArrays(users, usersContainer);
iterateArrays(animals, animalsContainer);
