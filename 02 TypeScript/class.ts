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


class UsuarioDos {
    constructor(public nombre:string,
                private _casado: boolean,
                protected _edad: number){
    }
    get casado(){
        return this._casado;
    }
    set casado(casado: boolean) {
        this._casado = casado;
    }
    imprimirUsuario(saludo: string) : string {
        //Template String
        return `${saludo}. Mi nombre es ${this.nombre}. estoy casado ${this.casado}, mi edad es ${this._edad}`;
    }
}

let kevinDos = new UsuarioDos('Fabricio', false, 23);
console.log(kevinDos);
console.log(kevinDos.imprimirUsuario('Hola soy goku'));

let carla: UsuarioTres = {
    nombre: 'Kevin',
    //casado: false,
    edad: 28
};
//interface sirve para implementar una clase y para tipar un dato.
interface UsuarioTres {
    nombre: string;
    casado?: boolean;
    edad: number;
}

console.log(carla);