// funciones sin parametros
function aumentarPrecio(){
    let disney= 385;
    let inflacion = 150;
    document.write('Valor total del servicio disney plus $' + (disney + inflacion))
}

// funcion con parametros
function actualizarPrecio(monto, producto, precio){
    let calculo= precio + monto
    document.write('<br> el producto; '+producto+ ' precio total $'+ calculo);
}

//funciones que devuelven un valor
/*function convertirDolaresPesos(precioDolar){
let total = precioDolar * 184;
return total;
//jamas escribimos en esta zona la linea return es la ultima linea
}*/

//funciones en formas de flechas
let convertirDolaresPesos = (precioDolar, dolarBlue) =>{
    let total = precioDolar * 184;
    return total;
}

// invocar funcion
aumentarPrecio();

let coeficienteIflacion = parseInt(prompt('ingrese el monto total del mes'));

actualizarPrecio(coeficienteIflacion, 'Teclado Hyperx',9000);
actualizarPrecio(coeficienteIflacion, 'Teclado logitec',9000);
actualizarPrecio('mouse logitec',9000, 100);


let dolarBlue = parseInt(prompt ('ingrese calor del dolar blue a la fecha'));
let iphone = convertirDolaresPesos(1200)

document.write('<br>Producto Iphone - precio$' +iphone+'(producto nuevo)');
document.write('<br>Producto Ps5 - precio $' + convertirDolaresPesos(500)+'(ultima version)');

//document.write(`<br>Producto Iphone - precio$ ${iphone} (producto nuevo)`);
 