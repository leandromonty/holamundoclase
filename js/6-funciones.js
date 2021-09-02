// funciones sin parametros
function aumentarPrecio(){
    let disney= 385;
    let inflacion = 150;
    document.write('Valor total del servicio disney plus $' + (disney + inflacion))
}

// funcion con parametros
function actualizarPrecio(monto, producto, precio){
    let calculo= precio + monto
    document.write('<br> el producto; '+producto+ ' precio total $'+ calculo)
}

// invocar funcion
aumentarPrecio();

let coeficienteIflacion = parseInt(prompt('ingrese el monto total del mes'))


actualizarPrecio(coeficienteIflacion, 'Teclado Hyperx',9000)