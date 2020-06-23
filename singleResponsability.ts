class Vehiculo {
    private _modelo: string;
    private _num_ruedas: number;

    constructor(modelo: string, num_ruedas: number) {
        this._modelo = modelo;
        this._num_ruedas = num_ruedas;
    }

    get modelo():string {
        return this._modelo;
    }

    get num_ruedas():number {
        return this._num_ruedas;
    }
}

class Coche extends Vehiculo {
    constructor() {
        super('Coche', 4);
    } 
}

class Moto extends Vehiculo {
    constructor() {
        super('Moto', 2);
    } 
}

class VehiculoPrintable {
    static log(vehiculo: Vehiculo) {
        console.log('El vehículo ' + vehiculo.modelo + ' tiene ' + vehiculo.num_ruedas + ' ruedas');
    }
}

let coche = new Coche();
let moto = new Moto();

VehiculoPrintable.log(coche);
VehiculoPrintable.log(moto);

