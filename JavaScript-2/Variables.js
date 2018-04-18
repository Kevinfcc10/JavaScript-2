console.log('Hola mundo');
var mutar;
//Objeto Json
var usuario = {
    nombre: 'Kevin',
    apellido: 'Carate',
    cedula: '1234567890',
    //edadCuadrado: potenciaDeDosDeUnNumero(23),
    edad: '23',
    imprimir: function () {
        console.log(this.nombre + ' '+ this.apellido);
    }
};
usuario.imprimir();
console.log(usuario.imprimir);
var arreglo = [
    1,
    'Kevin',
    true,
    undefined,
    null,
    new Date(),
    {
        nombre: "Kevin"
    },
    [1, 2, 3, 4],
    usuario.imprimir,
    usuario.imprimir(),
];
console.log(arreglo);

console.log(usuario.nombre, usuario.apellido);
console.log(usuario);
//Método
delete usuario.edad;
console.log(usuario);
usuario.fechaNacimiento = new Date();
console.log(usuario);
usuario.mascotas = {};
usuario.mascotas.nombre = 'Shaggi';
console.log(usuario);

var nombre = 'Kevin';
mutar = nombre;
var edad = 23;
mutar = edad;
var peso = 40.5;
var casado = false;
mutar = casado;
var fechaNacimiento = new Date();
var noExisto = null;//False
var noEstoyDefinido = undefined;//False
var num = 0; //False
var num1 = 1; //True
var num2 = -1; //True

if (num1) {
    console.log('verdadero')
} else {
    console.log('falso')
}



var arreglo = [
    1,
    'Kevin',
    true,
    undefined,
    null,
    new Date(),
    {
        nombre: "Kevin"
    },
    [1, 2, 3, 4]
];
console.log(arreglo);

function SumarNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(SumarNumeros(1, 2));
console.log(SumarNumeros(1, 2.324));

var potenciaDeDosDeUnNumero = function noEsNecesarioPonerElNombre(numero) {
    return numero*numero;
};

potenciaDeDosDeUnNumero = function (numero) {
    return numero*numero;
};
console.log(potenciaDeDosDeUnNumero(1, 2, 3));
console.log(potenciaDeDosDeUnNumero(4));
