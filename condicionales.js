//CONDICIONAL TRADICIONAL
const age = -67;

if (age >= 18) {                        //Cuando edad es mayor que 18
  console.log("Eres mayor de edad");
} else if (age >= 1 && age <= 17) {     //Cuando edad es entre 1 y 17
  console.log("Eres menor de edad");
} else {
  console.log("No has nacido");         //Según los cálculos, edad desde 0 a -X
}

//TERNARIO
age >= 18
  ? console.log("TERNARIO -> Eres mayor de edad")    //Cuando se cumple la condición
  : console.log("TERNARIO -> Eres menor de edad");   //Cuando no se cumple
