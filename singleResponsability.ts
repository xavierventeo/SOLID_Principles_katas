class Vehiculo {
    constructor(public modelo: string, public num_ruedas: number) {
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

