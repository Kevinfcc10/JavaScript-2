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
var UsuarioDos = /** @class */ (function () {
    function UsuarioDos(nombre, _casado, _edad) {
        this.nombre = nombre;
        this._casado = _casado;
        this._edad = _edad;
    }
    Object.defineProperty(UsuarioDos.prototype, "casado", {
        get: function () {
            return this._casado;
        },
        set: function (casado) {
            this._casado = casado;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioDos.prototype.imprimirUsuario = function (saludo) {
        //Template String
        return saludo + ". Mi nombre es " + this.nombre + ". estoy casado " + this.casado + ", mi edad es " + this._edad;
    };
    return UsuarioDos;
}());
var kevinDos = new UsuarioDos('Fabricio', false, 23);
console.log(kevinDos);
console.log(kevinDos.imprimirUsuario('Hola soy goku'));
var carla = {
    nombre: 'Kevin',
    //casado: false,
    edad: 28
};
console.log(carla);
