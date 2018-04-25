console.log('Hola Mundo');
var hola;
var adios = 'Adios';
hola = 'Adios';
hola = 1;
var nombre = 'Kevin';
var edad = 23;
var casado = false;
var fechaNacimiento = new Date();
var Usuario = /** @class */ (function () {
    function Usuario(nombre, casado, edad) {
        this.nombre = nombre;
        this.casado = casado;
        this.edad = edad;
    }
    return Usuario;
}());
var kevin = new Usuario('Kevin', false, 23);
console.log(kevin);
