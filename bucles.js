const alimentos = ["lechuga", "pan", "galletas"];

const numeros = [1, 5, 98, 43];

const car = {
  name: "Fiesta",
  company: "Ford",
  wheels: 4,
  doors: 5,
};

const movies = [
  {
    title: "Evil Dead",
    year: 1986,
    poster: "https://img.fruugo.com/product/7/35/14395357_max.jpg",
    director: {
      name: "Sam Raimi",
      age: 78,
      location: "Virginia",
    },
  },
  {
    title: "Titanic",
    year: 1996,
    poster:
      "https://www.tuposter.com/pub/media/catalog/product/cache/image/700x560/91bbed04eb86c2a8aaef7fbfb2041b2a/t/i/titanic_cartel.png",
    director: {
      name: "James Cameron",
      age: 70,
      location: "New Jersey",
    },
  },
];

//BUCLE TRADICIONAL
for (let i = 0; i < alimentos.length; i++) {
  //      |               |               |
  //      1               2               3
  //1-> Inicilizamos una variable que es el indice y comenzamos en 0 para recorrer un array desde el principio, es decir, la posición 0
  //2-> Hasta que i sea menor que la longitud de mi array va a seguir iterando el bucle
  //3-> Lo que queremos que pase después de cada una de las vueltas
  const alimento = alimentos[i];
  console.log("POS", i, alimento);
}

console.log("La longitud de mi array alimentos es:", alimentos.length);
//ARRANCA EL BUCLE
//Primera vuelta -> i=0 -> i es menor que 3 -> para la siguiente vuelta ++
//alimento = alimentos[0] -> lechuga
//Segunda vuelta -> i=1 -> i es menor que 3 -> para la siguiente vuelta ++
//alimento = alimentos[1] -> pan
//Tercera vuelta -> i=2 -> i es menor que 3 -> para la siguiente vuelta ++
//alimento = alimentos[2] -> galletas
//Cuarta vuelta -> i=3 -> NO SE CUMPLE, SE ROMPE EL BUCLE

//GO TO HELL -> LENGTH

//FOROF
for (const numero of numeros) {
  console.log("FOROF->", numero); //Generamos una constante con cada uno de los elementos individuales de mi array, y en este caso lo imprimos por consola
}

//FOREACH
numeros.forEach((numero) => {
  //POR CADA uno de los elementos de numero -> lo generamos tras la ejecución -> ejecutamos x
  console.log("FOREACH->", numero);
});

//FORIN
for (const key in car) {
  console.log("FORIN->", `CLAVE: ${key} - VALOR: ${car[key]}`);
}
//Podemos acceder a cada uno de los valores de las claves de un objeto entre corchetes e indicandole con un string la clave
console.log(car["name"]);

//RECORRER UN ARRAY DE OBJETOS
//Aqui estamos recorriendo el array de movies -> Y por cada una de las movies vamos a hacer 2 bucles diferentes
for (const movie of movies) {
  //Aqui estamos recorriendo cada una de las movies y leyendo los valores de cada una de sus claves, es decir: title, year, poster, director
  for (const key in movie) {
    console.log(`La clave de movie: ${key}, tiene el valor: ${movie[key]}`);
  }
  //Aqui estamos recorriendo cada uno de los movie["director"] (SON OBJETOS TAMBIEN) y leyendo los valores de cada una de sus claves, es decir: name, age, location
  for (const key in movie["director"]) {
    console.log(
      `La clave de director: ${key}, tiene el valor ${movie["director"][key]}`
    );
  }
}

//Fuera de un bucle podemos acceder a las claves y valores de un objeto de esta forma
//Dentro de un bucle necesitamos si o si los corchetes porque las "key" las genera como string, por lo tanto necesitamos hacer lo siguiente -> movie[0]["director"]["name"]
console.log(movies[0].director.name)