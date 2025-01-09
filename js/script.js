var tipoVariable = "hola como estan";
let tipoLet = 34;
const tipoConst = true;

var tipoVariable = 5;
tipoVariable = true;

tipoLet = 45;

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
// const apeliido = alumno.apeliido;
// const nacionalidad = alumno.nacionalidad;

const { nombre, apellido, nacionalidad } = alumno;

console.log(nombre);
console.log(apellido);
console.log(nacionalidad);

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

function condicionEdad(alumnos) {
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].edad > 40) {
      console.log(`el alumno ${alumnos[i].nombre} es mayor a 40 años`);
    } else {
      console.log(`el alumno ${alumnos[i].nombre} es menor a 40 años`);
    }
  }
}

condicionEdad(alumnos);
