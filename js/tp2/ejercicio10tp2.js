let filas= parseInt(prompt('ingrese un numer de filas'));
let columnas= parseInt(prompt('ingrese un numer de filas'));
//valor para cargar las celdas
let total= filas * columnas;

document.write('<table border>');
/*document.write('<tr>')
document.write('<td> prueba')
document.write('</td>')
document.write('</tr>')*/
for(let indiceFila=0; indiceFila < filas; indiceFila++){
    document.write('<tr>');
    for(let indiceColumna=0; indiceColumna< columnas; indiceColumna++){
        document.write('<td>'+total)
        document.write('</td>')
        total--;
    }

    document.write('</tr>');
}
document.write('</table>');