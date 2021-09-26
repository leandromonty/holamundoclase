//crear una clase
class Serie{
    //con este metodo se crean objetos
    constructor(parametroNombres, parametroTemporadas, parametroCapitulos, parametroGenero){
        //crear propiedades del objeto
        this.nombre = parametroNombres;
        this.temporadas = parametroTemporadas;
        this.capitulos = parametroCapitulos;
        this.genero = parametroGenero;
        this.publicado = false; //propiedad por defecto
    }
    //aqui van nuestros metodos 
    mostrarDatos(){
        document.write('serie: '+this.nombre +' temporadas '+this.temporadas+'<br>')
    }
    mostrarDatosExtendidos(){
        //mostrar todas las propiedades del objeto '' o ``
    }
}

//utilisar la clase o crear o instanciar objetos
let theOffice = new Serie('The Office',9,27,'sitcom');
let vikingos = new Serie('vikings',5,20,'accion')

console.log(theOffice);

theOffice.mostrarDatos();
vikingos.mostrarDatos();
