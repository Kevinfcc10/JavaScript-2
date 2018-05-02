//Operadores
let arregloNumeros = [1,2,3,4,5];
// fat arrow functions
let sumarDosNumeros = (
    numeroUno:number,
    numeroDos:number): number => {
    return numeroUno + numeroDos;
};
console.log(sumarDosNumeros(1,2));

let potenciaDeUnNumero = numero => {
    return numero * numero;
};

let potenciaDeUnNumeroV2 = numero => numero * numero;

let sumarDosNumerosV2 = (
    numeroUno:number,
    numeroDos:number): number => numeroUno + numeroDos;

let sumaTotal = 0
let resultadoForEach = arregloNumeros.forEach( (valorActual, indiceActual, arreglo) => {
  sumaTotal = sumaTotal + valorActual;
  console.log(valorActual);
  console.log(indiceActual);
  console.log(arreglo);
    }
);

console.log(resultadoForEach);
console.log(sumaTotal);

let resultadoSumaConReduce = arregloNumeros.reduce(
    (valorAcumuladoActual, valorActualArreglo) => {
        console.log('valorAcumuladoActual', valorAcumuladoActual);
        console.log('valorActualArreglo', valorActualArreglo);
        return valorAcumuladoActual - valorActualArreglo;
    },
    20
);
console.log(resultadoSumaConReduce);
//let arregloUsuarios =
//let arregloUsuarios: Array<UsuarioArreglo> = [
let arregloUsuarios: UsuarioArreglo[] = [

    {
        nombre:'Kevin',
        edad:23
    },
    {
        nombre:'Gabriela',
            edad:28
    },
    {
        nombre:'Manuel',
        edad:18
    },
    {
        nombre:'Daniela',
        edad:22
    },
    {
        nombre:'Fabricio',
        edad:21
    },
];

let resultadoEdadUsuarios = arregloUsuarios.reduce(
    (acumuladoEdad:number,
     usuario:UsuarioArreglo) => {
        return acumuladoEdad + usuario.edad;
    },
    0
);
console.log(resultadoEdadUsuarios);
interface UsuarioArreglo {
    nombre:string;
    edad:number;
    deuda?: number;
}

//Operador map devuelve el arreglo transformado o mutado, parecido al for each
let nuevoArregloDeUsuarios = arregloUsuarios.map(
    (usuario: UsuarioArreglo) => {
        usuario.deuda = 0;
        return usuario;
}
);

console.log(nuevoArregloDeUsuarios);