//CONSTRUIR UNA CASA

//¿Qué necesito?
//->Aluminio, piedra, madera, cristal

//1. Conseguir los materiales -> DECLARACION
//2. Poner los cimientos -> ACCION
//3. Estructura -> ACCION
//4. Carpinteria -> ACCION
//5. Acabados -> ACCION
//6. Entrega -> ACCION

const materials = ["Aluminio", "Piedra", "Madera", "Cristal"];
    
const conseguirMateriales = (elements) => {
    //Hacemos un destructuring del array elements y sacamos 4 materiales diferentes según el orden natural del array
    const [material1, material2, material3, material4] = [...elements];
  
    ponerCimientos([material1, material2, material3]);

}

const ponerCimientos = (elements) => {
console.log("Poner cimientos", elements)
    estructura()

}

const estructura = () => {

}

const carpinteria = () => {

}

const acabados = () => {

}

const entrega = () => {

}

conseguirMateriales(materials);