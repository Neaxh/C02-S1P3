import { leerSuperheroes,agregarSuperheroes } from "./utils.mjs";

const archivoOriginal='./superheroes.txt';

const archivoNuevos='./agregarSuperheroes.txt';

//agregar nuevos superheroes
agregarSuperheroes(archivoOriginal,archivoNuevos);


//leer y mostrar la lista de superheroes ordenada

const superheroes= leerSuperheroes(archivoOriginal);

console.log('Superhéroes ordenados: -----');
console.log(superheroes);


/* 
const superheroes= leerSuperheroes('./superheroes.txt');
console.log('Superhéroes 

se importa la funcion leersuperheroes de until.mjs
se llama a la funcion leer/ordenar desde el archivo superheroest.t */