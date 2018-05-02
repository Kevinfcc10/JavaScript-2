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
        edad:17
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
    becario?: boolean;
}

//Operador map devuelve el arreglo transformado o mutado, parecido al for each
let nuevoArregloDeUsuarios = arregloUsuarios
    .map(
    (usuario: UsuarioArreglo) => {
        usuario.becario = false;
        return usuario;
        }
    )
    .map(
        (usuario: UsuarioArreglo) => {
            usuario.deuda = calcularDeuda(usuario.edad);
            return usuario;
        }
    )
    .filter(
        (usuario:UsuarioArreglo) => {
            return usuario.deuda < 24
        }
    )
    
    .some(
    (usuario:UsuarioArreglo) => {
        return usuario.edad < 18 //true , false
    }
    /*
    .every(
        (usuario:UsuarioArreglo) => {
            return usuario.edad < 18 //true , false
        }*/
);


function calcularDeuda(edadUsuario:number){
    const  totalEdad = arregloUsuarios.reduce((total,usuario: UsuarioArreglo) => total + usuario.edad,0);
    return totalEdad * (edadUsuario/100);
}

console.log(nuevoArregloDeUsuarios);

