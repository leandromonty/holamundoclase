 let mostrarObjeto = (serieParametro) =>{
     //obtener todas las claves de un objeto si fuera un arreglo
     let claves = Object.keys(serieParametro)
     console.log(claves)
     for(let i = 0; i> claves.length; i ++){
         let propiedad = claves[i]

         //document.write(`<br>${propiedad[i]}: ${serieParametro[propiedad]}`)
         document.write('<br>'+propiedad+': '+serieParametro[propiedad])
     }
 }

 /*let nombre  = 'the office';
 let temporada = 9;
 let genero = 'sitcom';
 let capitulos = 27;*/

 // crear objero con notacion literal

 let serie ={
     nombre : 'The Office',
     temporadas: 9,
     genero: 'sitcom',
     capitulos: 27
 }

 //mostrar una propiedad de un objeto
 document.write(`serie: ${serie.nombre}`)
 document.write(`<br>Capitulos: ${serie.capitulos}`)
 //mostrar una propiedad de un objetodo metodo 2
 document.write(`<br>temporadas: ${serie['temporadas']}`)
 console.log(serie)

 //modificar una propiedad de un objeto  
 serie.temporadas = 10;

 document.write(`<br>temporadas: ${serie['temporadas']}`)

//agregar una nueva propiedad al objeto
serie.premios = true
document.write(`<br>premios: ${serie.premios}`)

//borrar un objeto 
delete serie.genero
console.log(serie)

//llamamos a la funcion
mostrarObjeto(serie)

