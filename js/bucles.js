//document.write('Elemento 1 <br>')
//document.write('Elemento 2 <br>')
//document.write('Elemento 3 <br>')
//document.write('Elemento 4 <br>')
//document.write('Elemento 5 <br>')
//document.write('Elemento 6 <br>')
//document.write('Elemento 7 <br>')
//document.write('Elemento 8 <br>')

// while

/*
while(condicion){
    codigo a  ejecutar si se cumple la condicion
    cambiar condicion
}
*/

let contador = 1

while(contador<= 100){
    document.write('Elemento' +contador + '<br>')
    contador++
}



//do-while
/*
do{
    codigo a ejecutar
    cambio la condicion
}while(condicion)
*/

let elemento = 1

do{
    document.write('Elemento do' +elemento + '<br>')
    elemento++
}while(elemento <= 100)



//estructura for
/*
for(crear la variable; condicion; incremento o decremento el valor de la variable){
    codigo a ejecutar
}
*/

for(let i= 1; i<= 100; i++){
    document.write('Elemento i' +i + '<br>')
}