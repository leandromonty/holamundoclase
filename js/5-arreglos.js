let anime= 'Dragon Ball z'


//crear o inicializar un arreglo
let series = ['Dragon Ball ','Naruto', 'Evangelion 3.0+1', anime, 15, true]
// crear un arreglo vacio
let temporadas= [];

document.write('serie individual:' + series[3] );


//agregar un elemento al final del arreglo
series.push('Loky');
series.push('Breaking Bad');

console.log(series[6]);

// para saber la cantidad de elemento  que tiene el arrelgo
console.log(series.length);
console.log(temporadas.length);

series.push(prompt('ingrese una serie '));
console.log(series.length);

//mostrar todos los elementos de un arreglo
for(let posicion = 0; posicion < series.length; posicion++){
    document.write('<br>Series:'+series[posicion])
}

//modificar un elemento del arreglo
series[4] = 'The Office';

document.write('<br>');
for(let posicion = 0; posicion < series.length; posicion++){
    document.write('<br>Series:'+series[posicion])
}

//agregar elemento nuevo en una posicion particular
series.splice(0,0,'One Piece')

document.write('<br>');
for(let posicion = 0; posicion < series.length; posicion++){
    document.write('<br>Series:'+series[posicion])
}


series.splice(3,0,'Sword Art Online')

document.write('<br>');
for(let posicion = 0; posicion < series.length; posicion++){
    document.write('<br>Series:'+series[posicion])
}

//eliminar 
series.splice(7,1)

document.write('<br>');
for(let posicion = 0; posicion < series.length; posicion++){
    document.write('<br>Series:'+series[posicion])
}