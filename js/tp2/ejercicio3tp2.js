let resultado=''
do{
    let palabra =prompt('ingrese una palabra') 
    resultado= resultado+palabra+'-'
    console.log(palabra)

//while(true) o while(false)
}while(confirm('desea continuar?'))
document.write(resultado)
