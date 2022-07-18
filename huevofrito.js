//COMO HACER UN HUEVO FRITO

//HUEVO - SARTEN - ACEITE - PLATO

//1. Comprar todo lo que necesito -> DECLARACION
//2. Calentar la sarten con el aceite -> ACCION
//3. Echar el huevo -> ACCION
//4. Servir el huevo frito en plato -> ACCION

//SUPERMERCADO

const huevo = "🥚";
const sarten = "🍳";
const aceite = "🧴";
const plato = "🍽";

//FUNCIONES

const comprar = (ingrediente1, ingrediente2, utensilio, soporte) => {
  //Comprobamos que le estamos pasando todo lo necesario para la compra
  if (ingrediente1 && ingrediente2 && utensilio && soporte) {
    console.log(`🛒 = `)
    calentar(ingrediente1, ingrediente2, utensilio, soporte);
  } else {
    console.log("¡Vete a hacer la compra!");
  }
};

const calentar = (ingrediente1, ingrediente2, utensilio, soporte) => {
  if (ingrediente2 && utensilio && soporte) {
    cocinar(ingrediente1, soporte);
  } else {
    console.log(
      "Te has olvidado de uno de los elementos para calentar la sarten"
    );
  }
};

const cocinar = (ingrediente, soporte) => {
  if (ingrediente && soporte) {
    servir(ingrediente, soporte);
  } else {
    console.log("No puedo cocinar");
  }
};

const servir = (ingrediente, soporte) => {
  if (ingrediente && soporte) {
    console.log(`Aquí tienes tu comida -> ${ingrediente} - ${soporte}`);
  } else {
    console.log("Vete a Cuba");
  }
};

comprar(huevo, aceite, sarten, plato);
comprar("🥩", aceite, sarten, plato )