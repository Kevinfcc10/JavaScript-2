console.log('Hola Mundo');
let hola: number | string | boolean;
const adios = 'Adios';
hola = 'Adios';
hola = 1;
let nombre : string = 'Kevin';
let edad: number = 23;
let casado: boolean = false;
let fechaNacimiento : Date = new Date();

class Usuario{
    nombre : string;
    private casado: boolean;
    protected edad: number;
    constructor (nombre: string,
                casado: boolean,
                edad: number) {
                    this.nombre = nombre;
                    this.casado = casado;
                    this.edad = edad;
    }
}

let kevin: Usuario = new Usuario('Kevin',false,23);
console.log(kevin);