import fs from 'fs';

//clase para representar un Superheroe

class Superheroe{
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad,planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo) {
    
    this.id=id;
    this.nombreSuperheroe=nombreSuperheroe;
    this.nombreReal=nombreReal;
    this.nombreSociedad=nombreSociedad;
    this.edad=edad;
    this.planetaOrigen=planetaOrigen;
    this.debilidad=debilidad;
    this.poder =poder;
    this.habilidadEspecial=habilidadEspecial;
    this.aliado=aliado;
    this.enemigo=enemigo;
    }
}

//función para leer y ordenar los superheroes

export function leerSuperheroes(ruta){

    const datos = fs.readFileSync(ruta,'utf8');

    const superheroesArray = JSON.parse(datos);

    //convertir a instancias de superheroes
    
    
    const superheroes=superheroesArray.map(hero => new Superheroe
    (
        hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad,hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo
    ));

    //ordenar por nombre de superheroe

    superheroes.sort((a,b)=> a.nombreSuperheroe.localeCompare(
        b.nombreSuperheroe
    ));

    return superheroes;
}

/* clase superheroes define un modelo para los sh con todas las proppiedades necesarioas

funtion leersuperheroes lee archivo JSON lo convierte en onjeto superheroe los ordena por nombre y devulve la lista*/

//nueva funcion para agregar superheroes

export function agregarSuperheroes(rutaOriginal,RutaNuevos){
    const datosOriginales=fs.readFileSync(rutaOriginal,'utf8'); //lee el archivo existente
    const datosNuevos= fs.readFileSync(RutaNuevos, 'utf8'); //lee el archivo con los nuevos sh

    const superheroesOriginales=JSON.parse(datosOriginales);

    const nuevosSuperheroes=JSON.parse(datosNuevos);
    // convertirr los nuevos sh a intancias de sh

    const instanciasNuevos=nuevosSuperheroes.map(hero => new Superheroe
        (
            hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad,hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo
        ));

        //combinar lu¿istas

        const listaActualizada =[...superheroesOriginales, ...instanciasNuevos]

        //guardae la lista actualizada
        fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null,2),'utf8'); 
        console.log('Lista de superhéroes actuaizada con éxito.'); 
}