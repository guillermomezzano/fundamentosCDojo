var tipoVariable = "hola como estan";
let tipoLet;
tipoLet = 35;

const tipoConst = true;

var tipoVariable = 5;

tipoVariable = true;

tipoLet = true;

// const alumnos = ["alex", "vicente", "nico", "chris"];

// console.log(alumnos[1]);
// suma(tipoLet, 2);

function suma(tipoLet, num2) {
  const num3 = 89;
  console.log(tipoLet, num2);
  result = tipoLet + num2;
  console.log(result);
  console.log("estoy dentro de la funcion suma");
  return num3;
}

// const num3 = suma(tipoLet, 2);
// console.log(num3);

//array
// const alumnos = ["vicente", "nico", "chirs", "julian"];

// for (let i = 0; i < alumnos.length; i++) {
//   console.log(`indice ${i} , valor ${alumnos[i]}`);
// }

//desestructuracion
// const [, , alumnoNumeroTres] = alumnos;
// console.log(alumnoNumeroTres);
// const aulumno = alumnos[2];
// console.log(aulumno);

//objetos
const alumno = {
  nombre: "vicente",
  apellido: "balmaceda",
  edad: 31,
  nacionalidad: "chileno",
  skill: ["java", "c++", "javaScript"],
  saludo: function saludo() {
    console.log("hola como estan?");
  },
};

// console.log(alumno.skill[2]);
// console.log(alumno["nacionalidad"]);

// const nombre = alumno.nombre;
// const apellido = alumno.apellido;
// const nacionalidad = alumno.nacionalidad;

// const { nombre, apellido, nacionalidad } = alumno;

// console.log(nombre);
// console.log(apellido);
// console.log(nacionalidad);

// __spread_____

// console.log(alumno);
// const alumnoSpread = alumno

// const alumnoSpread = { ...alumno, estadoCivil: "soltero", nombre: "camilo" };
// // console.log(alumno);
// // console.log(alumnoSpread);
// const arrayCero = [4, 5, 6];
// const arrayUno = [1, 2, 3];
// const arrayDos = [...arrayUno, ...arrayCero];
// // console.log(arrayUno);
// // console.log(arrayDos);

// function sumar(...numeros) {
//   console.log(numeros);
//   return numeros.reduce((acc, num) => acc + num, 0);
// }

// console.log(sumar(1, 2, 5));

// _____ternario_______

let evaluacion;

if (alumno.edad > 30) {
  evaluacion = "mayor a 30";
  // add logica
} else {
  evaluacion = "menor a 30";
  // add logica
}

evaluacion = alumno.edad > 30 ? "mayor a 30" : "menor a 30";

// condicion ? retorno si la condicion se cumple : retorno si la condicion no se cumple

// console.log(evaluacion);

const alumnos = [
  {
    nombre: "vicente",
    apellido: "balmaceda",
    edad: 31,
    nacionalidad: "chileno",
  },
  {
    nombre: "nico",
    apellido: "rodriguez",
    edad: 21,
    nacionalidad: "venezuela",
  },
  {
    nombre: "chirs",
    apellido: "berdeja",
    edad: 42,
    nacionalidad: "mexicano",
  },
  {
    nombre: "julian",
    apellido: "valderrama",
    edad: 23,
    nacionalidad: "colomnbia",
  },
];

if (alumno.edad > 30) {
  evaluacion = "mayor a 30";
  // add logica
} else {
  evaluacion = "menor a 30";
  // add logica
}

evaluacion = alumno.edad > 30 ? "mayor a 30" : "menor a 30";
// condicion ? retorno si la condicion se cumple : retorno si la condicion no se cumple

//con if else
// function condicionEdad(alumnos) {
//   for (let i = 0; i < alumnos.length; i++) {
//     if (alumnos[i].edad > 40) {
//       console.log(`el alumno ${alumnos[i].nombre} es mayor a 40 años`);
//     } else {
//       console.log(`el alumno ${alumnos[i].nombre} es menor a 40 años`);
//     }
//   }
// }

// con operdador ternario
function condicionEdad(alumnos) {
  for (let i = 0; i < alumnos.length; i++) {
    alumnos[i].edad > 40
      ? console.log(`el alumno ${alumnos[i].nombre} es mayor a 40 años`)
      : console.log(`el alumno ${alumnos[i].nombre} es menor a 40 años`);
  }
}

// condicionEdad(alumnos);

//sin ternario
function suma(num1, num2) {
  const resultado = num1 + num2;
  if (resultado % 2 === 0) {
    return `el resultado es par ${resultado}`;
  } else {
    return `el resultado es inpar ${resultado}`;
  }
}

//con ternario
function suma(num1, num2) {
  const resultado = num1 + num2;

  return resultado % 2 === 0
    ? `el resultado es par ${resultado}`
    : `el resultado es inpar ${resultado}`;
}

const resultadoSuma = suma(1, 2);
console.log(resultadoSuma);
