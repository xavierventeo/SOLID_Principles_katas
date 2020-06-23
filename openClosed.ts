class Vehicle {
    private _modelo: string;
    private _num_ruedas: number;
    private _km_actual: number;

    constructor(modelo: string, num_ruedas: number, km_actual: number) {
        this._modelo = modelo;
        this._num_ruedas = num_ruedas;
        this._km_actual = km_actual;
    }

    get modelo():string {
        return this._modelo;
    }

    get num_ruedas():number {
        return this._num_ruedas;
    }

    get km_actual():number {
        return this._km_actual;
    }
}

class Car extends Vehicle {
    constructor(km_actual: number) {
        super('Coche', 4, km_actual);
    } 
}

class Bike extends Vehicle {
    constructor(km_actual: number) {
        super('Moto', 2, km_actual);
    } 
}

class Calculator {
    Area(vehicles: Vehicle[] ) : number {
        let kilometraje : number = 0;
        vehicles.forEach(it => {
            kilometraje += it.km_actual;
        });

        return kilometraje;
    }
}

let calculator = new Calculator();
let vehiculo1 = new Car(25000);
let vehiculo2 = new Bike(5000);

let res = calculator.Area([vehiculo1,vehiculo2]);
console.log("Total Kilometraje: "+res);

