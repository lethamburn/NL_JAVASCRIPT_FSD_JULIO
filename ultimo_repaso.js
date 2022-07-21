// ------VARIABLES-------
// Variables: son reservas de espacio de memoria.
// var nameVar = value;
// No entiende de Scopes -> ambito de actuación : 2015 | Evitar su uso
// let nameLet = value;
// Respeta los scopes -> ambitos de actuación: 2015 - Now 
// const nameConst = value;
// Asignamos un valor en nuestro espacio de memoria y no es reasignable
// Respeta los scopes -> ambitos de actuación: 2015 - Now 

// -------TIPOS PRIMITIVOS----------

// string -> cadena de caracteres
let cadena = "Soy una Cadena";
// number -> valores numericos
let age = 50;
// boolean -> valores truthy or falsy
let isDefine = false;
// undefined -> valor no definido
let notDefine = undefined; // let notDefine; 
// null -> es un valor nulo
let valueNull = null;


// --------TIPOS OBJECT --------------

// arrays -> lista de elementos sin correlación o orden - key[pos] - value
let matriz = [1, "Alberto", { name: "Ramon", age: 28 }, false, undefined, null];
// objectos -> lista de elementos comunes con relación y ordenado - key[atributo] value
let person = { name: "Pedro", age: 29, isDeveloper: true };


//--------Array Methods ----------------

// forEach -> Iterar listas desordenadas - pero modifica el array original

matriz.forEach((elementoIterado) => {
  // Lo que queramos hacer -> CODE
})

// Podemos usar el index para cualquier acción en el que sea necesario
matriz.forEach((elementoIterado, index) => {
  // Lo que queramos hacer -> CODE
})

// map -> itera listas y genera una nueva con las condiciones marcadas
// map -> para modificar y transformar NO RECORRER!!!!!!

let newMatriz = matriz.map((elementoIterado) => {
  if (elementoIterado === "Alberto") return elementoIterado
});

let personMatriz = [
  {
    name: 'Pedro',
    isDeveloper: true
  },
  {
    name: 'Pepito',
    isDeveloper: false
  },
  {
    name: 'Daniel',
    isDeveloper: true
  }
]

// Sirve para recoger o añadir o modificar elementos por cada iteración

let newPersonMatriz = personMatriz.map((elementoIterado) => {
  return { name: elementoIterado.name, isDeveloper: elementoIterado.isDeveloper, isNeolander: true }
});


// Metodo map -> recibe una funcion ejecutada por parametro
// const callbackMap = (elementoIterado) => {
//   return { name: elementoIterado.name, isDeveloper: elementoIterado.isDeveloper, isNeolander: true }
// };
// Pierde la referencia
// let otherPersonMatriz = personMatriz.map(callbackMap());

console.log("ORGINAL ->", personMatriz);
console.log("MAPPEADO ->", newPersonMatriz);
// No FUnciona así porque pierde la referencia
// console.log("MAPPEADO FN ->", otherPersonMatriz);

// NO HACER ESTO MODIFICA EL ORIGINAL
// personMatriz.forEach((elementoIterado) => {
//   elementoIterado.isNeolander = true;
// })

// Esto hace lo mismo que el MAP
let matrizPush = [];

personMatriz.forEach((elementoIterado) => {
  matrizPush.push({ name: elementoIterado.name, isDeveloper: elementoIterado.isDeveloper, isNeolander: true });
});


// --------- FUCNIONES -------------

// Una función es guardar un fragmento de código ejecutable
const nombreFuncion = () => {
  //CODE 
}

// PUEDEN RETORNAR VALORES - Después del return no se ejecuta nada
const returnFunction = () => {
  return 'Hola a todos';
  console.log('hola')
}

// Pueden tener parametros -> elementos de entrada y pueden tener el nombre que queramos
const paramFunction = (param) => {
  // param dentro de la función se llama argumento
  return param + 5;
}

// Para ejecutar una función debemos invocarla
nombreFuncion();
returnFunction();
paramFunction('hola');

// Las funciones con retorno se suelen guardar los valores en variables

let greeting = returnFunction();
// greeting tiene el valor de retorno de la funcion
let sumaDeCinco = paramFunction(25);
// sumaDeCinco tiene el valor de retorno de la funcion

// -----------FUNCIONES QUE LLAMAN A FUNCIONES ---------

/*
  name: entrenador
  params: orden -> {asistente: 'Derecho', name: 'Pase en profundidad' }
  return : valor de retorno - no returned value
  calls: portero(params -> orden)
  invoke: entrenador({asistente: 'Derecho', name: 'Pase en profundidad'})
*/
const entrenador = (orden) => {
  console.log('ENTRENADOR->', orden);
  portero(orden)
}

const portero = (orden) => {
  console.log('PORTERO->', orden);
  central(orden)
}

const central = (orden) => {
  console.log('CENTRAL->', orden);
  orden.asistente === 'Derecho' ? medioDerecho(orden) : medioIzquierdo(orden)
}

const medioIzquierdo = (orden) => {
  console.log('MEDIO IZQ->', orden);
  delantero(orden)
}

const medioDerecho = (orden) => {
  console.log('MEDIO DER->', orden);
  delantero(orden)
}

const delantero = (orden) => {
  console.log('DELANTERO->', orden);
  console.log(`Asistencia de  ${orden.name}: ejecuto y Gol`);
}

// El entrenador sería nuestro init
entrenador({ asistente: 'Derecho', name: 'Pase en profundidad' });


// -----------FUNCIONES QUE LLAMAN A FUNCIONES CON RETURN---------

const matrizStudents = [{ name: 'Juan', age: 25 }, { name: 'Laura', age: 33 }];

/*
  name: init
  description: funcion que inicializa nuestra funcionalidad e modificar estudiantes
  params: nada
  return : valor de retorno - estudiantes transformados
  calls: recoverStudents() || transformedStudents(students) -> param recovered in recoverStudents()
  invoke: init()
*/
const init = () => {
  let students = recoverStudents();
  let transformStudents = transformedStudents(students);
  return transformStudents;
}

/*
  name: recoverStudents
  description: Recupera la lista de estudiantes
  params: nada
  return : retorna el valor de la lista de estudiantes
  calls: rnada
  invoke: recoverStudents()
*/
const recoverStudents = () => {
  return matrizStudents;
}

/*
  name: transformedStudents
  description: Añade un nuevo atributo a nuestros estudiantes
  params: lista de estudiantes
  return : retorna la lista de estudiantes transformados
  calls: nada
  invoke: transformedStudents(listStudents) -> [{name:'x', age:x}]
*/
const transformedStudents = (listStudents) => {
  let studentTransformed = listStudents.map((student) => {
    return { name: student.name, age: student.age, isDeveloper: false }
  });
  return studentTransformed;
}

// Asignamos el retorno a una variable para trabjar con ella o relaizar cualquier accion
let myFunctionsStudents = init();

console.log(myFunctionsStudents);


//--------CONDICIONALES----------//

// palabara if + (condition) {code}
let isOK = true;

// compruebo que el valor sea verdadero -> true
if (isOK) { console.log('ok'); }

let nameConditional = 'Alberto'

// compruebo que no este vacia la cadena -> true
if (nameConditional) console.log('Bienvenido ' + nameConditional);

// else { code } se ejecuta si no cumple la condition
if (!isOK === true) {
  console.log('ok');
} else {
  console.log('default');
}

// else if(conditio) {code}
if (!isOK === true) {
  console.log('ok');
} else if (isOK) {
  console.log('KO');
} else {
  console.log('default');
}

// ternarios con 1 elemento de anidacion
isOK ? 'ok' : 'ko';

// en los ternarios podemos almacenar
let responseTernary = isOK ? 'ok' : 'ko';

//-------REPASO ASYNC/ AWAIT + FETCH ------//


// const recoverPokemon = () => {
//   const elementPending = fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((element) => {
//     element.map(() => {

//     })
//   }).catch(console.log('He tenido un error'));
//   return elementPending;
// }

// const recoverPokemonSimple = async () => {
//   const element = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//   const elemetJson = await element.json();
//   return elemetJson;
// }

// let ditto = recoverPokemonSimple();

// console.log(ditto);




//-------NUEVOS METODOS ARRAY-------//

let foodList = [
  {
    id: 1, name: '🍕', kcal: 250
  },
  {
    id: 4, name: '🍔', kcal: 550
  },
  {
    id: 6, name: '🥦', kcal: 50
  },
  {
    id: 10, name: '🍦', kcal: 100
  },
  {
    id: 8, name: '🍔', kcal: 750
  },
]


// find -> encontrar
let burgerFind = foodList.find(food => food.name === '🍔');

console.log(burgerFind);

// filter -> filtrar
let burgerFiltered = foodList.filter(food => food.name === '🍔');

console.log(burgerFiltered);
// reduce -> no es obligatorio entenderlo -> reducir


//some -> algunos -> retorna un boolean true or false
// every -> todos
const isBurger = (element) => element.name === '🍔';
let burgerSome = foodList.some(isBurger);
let burgerEvery = foodList.every(isBurger)


console.log('SOME', burgerSome);
console.log('EVERY', burgerEvery);

// flat -> aplana
let basicFoodList = ['🥩', ['🍔', '🥓'], '🐟', ['🍣', '🍥'], '🍗', ['🍕', '🍔'], '🥗', ['🍲', '🫑']]
console.log('NO APLANA', basicFoodList);
let planeFood = basicFoodList.flat()
console.log('SI APLANA', planeFood);

// Destructuring -> MUY OBLIGATORIO
const food = {
  name: {
    spanish: 'zanahoria',
    english: 'carrot'
  },
  tuberculo: ['patata', 'cebolla']
}

let { spanish } = food.name;

console.log(spanish);


const RickMorty = {
  info: {},
  results: [1, 2, 4],
  data: 'Soy un data'
}
// REACT Destructuring -> param le lelga todo el objecto y vosotros solo cogeis el elemento que querais results
const myFunction = ({ results, data }) => {
  return { results, data }
}

console.log(myFunction(RickMorty));




// spread operator -> diferencial




//-------REPASO DOM---------// 2

//-------MANIPULACION DOM DARK MODO ------// 2



//------PROMESAS Y CALLBACKS---------//
//-------POO---------//
//------FICHEROS JS --------//