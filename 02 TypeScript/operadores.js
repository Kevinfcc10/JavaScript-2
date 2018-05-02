//Operadores
var arregloNumeros = [1, 2, 3, 4, 5];
// fat arrow functions
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
console.log(sumarDosNumeros(1, 2));
var potenciaDeUnNumero = function (numero) {
    return numero * numero;
};
var potenciaDeUnNumeroV2 = function (numero) { return numero * numero; };
var sumarDosNumerosV2 = function (numeroUno, numeroDos) { return numeroUno + numeroDos; };
var sumaTotal = 0;
var resultadoForEach = arregloNumeros.forEach(function (valorActual, indiceActual, arreglo) {
    sumaTotal = sumaTotal + valorActual;
    console.log(valorActual);
    console.log(indiceActual);
    console.log(arreglo);
});
console.log(resultadoForEach);
console.log(sumaTotal);
var resultadoSumaConReduce = arregloNumeros.reduce(function (valorAcumuladoActual, valorActualArreglo) {
    console.log('valorAcumuladoActual', valorAcumuladoActual);
    console.log('valorActualArreglo', valorActualArreglo);
    return valorAcumuladoActual - valorActualArreglo;
}, 20);
console.log(resultadoSumaConReduce);
//let arregloUsuarios =
//let arregloUsuarios: Array<UsuarioArreglo> = [
var arregloUsuarios = [
    {
        nombre: 'Kevin',
        edad: 23
    },
    {
        nombre: 'Gabriela',
        edad: 28
    },
    {
        nombre: 'Manuel',
        edad: 17
    },
    {
        nombre: 'Daniela',
        edad: 22
    },
    {
        nombre: 'Fabricio',
        edad: 21
    },
];
var resultadoEdadUsuarios = arregloUsuarios.reduce(function (acumuladoEdad, usuario) {
    return acumuladoEdad + usuario.edad;
}, 0);
console.log(resultadoEdadUsuarios);
//Operador map devuelve el arreglo transformado o mutado, parecido al for each
var nuevoArregloDeUsuarios = arregloUsuarios
    .map(function (usuario) {
    usuario.becario = false;
    return usuario;
})
    .map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
})
    .filter(function (usuario) {
    return usuario.deuda < 24;
})
    .some(function (usuario) {
    return usuario.edad < 18; //true , false
}
/*
.every(
    (usuario:UsuarioArreglo) => {
        return usuario.edad < 18 //true , false
    }*/
);
function calcularDeuda(edadUsuario) {
    var totalEdad = arregloUsuarios.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
    return totalEdad * (edadUsuario / 100);
}
console.log(nuevoArregloDeUsuarios);
