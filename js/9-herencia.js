//persona->nombre,apellido,dni,usuario, pass
//alumno->nombre,apellido,dni,usuario, pass, legajo, comision, curso
//tutor->nombre,apellido,dni,usuario, pass, comision, id, antiguedad

class Persona{
    constructor(paramnombre,paramapellido, paramdni,paramusuario,parampass,paramcomision){
    this.nombre = paramnombre
    this.apellido = paramapellido
    this.dni = paramdni
    this.usuario = paramusuario
    this.pass = parampass
    this.comision = paramcomision
}
mostrarDatos(){
    document.write(`Nombre: ${this.nombre}
    <br>Apellido: ${this.apellido}
    <br>dni: ${this.dni}
    <br>usuario: ${this.usuario}
    <br>pass: ${this.pass} 
    <br>comision: ${this.comision}`)
}

mostrarNombreCompleto(){
    document.write(`Nombre: ${this.nombre} Apellido: ${this.apellido}`)
}
// propiedade conmutadas getters y setters
get mostrarUsuario(){
    return this.usuario
}
get mostrarComision(){
    return this.comision
}
set modificarDni(nuevoDni){
    this.dni = nuevoDni;

}
set modificarComision(nuevaComision){
    this.comision = nuevaComision;

}

}

class Alumno extends Persona{
    constructor(paramnombre,paramapellido, paramdni,paramusuario,parampass,paramcomision,paramLegajo,paramCurso){
        super(paramnombre,paramapellido, paramdni,paramusuario,parampass,paramcomision)
        this.legajo = paramLegajo
        this.curso = paramCurso
    }
    mostrarDatos(){
        document.write(`<br>Nombre: ${this.nombre}
        <br>Apellido: ${this.apellido}
        <br>dni: ${this.dni}
        <br>usuario: ${this.usuario}
        <br>pass: ${this.pass} 
        <br>comision: ${this.comision}
        <br>legajo: ${this.legajo}
        <br>curso: ${this.curso}
        `)
    }
}

let lily = new Persona('lili','cerda',33444555,'lcerda','kjsahd','171');
lily.mostrarDatos();

document.write('<br>Usuario:'+ lily.mostrarUsuario);

//usar el settet
let otroDni=321541654;

lily.modificarDni = otroDni;
lily.mostrarDatos() 

let jonathan = new Alumno('johnathan','singh',1354654654,'sdasd','17i',1234,'fullstack')
jonathan.mostrarDatos()