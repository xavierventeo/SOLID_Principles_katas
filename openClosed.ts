
interface IVehicle {
    modelo: () => string;
    num_ruedas: () => number;
    toString:() => string;
}

abstract class Distance {
    abstract km(): number;  
}

class Vehicle extends Distance implements IVehicle {
    
    constructor(protected _modelo: string, protected _num_ruedas: number, protected _km_actual: number) {
        super();
    }

    modelo(): string {
        return this._modelo
    }

    num_ruedas(): number {
        return this._num_ruedas
    }
    
    km(): number {
        throw new Error("Method not implemented.");
    }

    toString() : string {
        return  "\tModelo: "+this.modelo() +"\tNum Ruendas: "+ this.num_ruedas() +"\tKm: "+this.km()+"\n"
    }
}

class Camion extends Vehicle {

    km(): number {
        return this._km_actual
    }

    constructor(km_actual: number) {
        super('Camion', 4, km_actual);
    } 
}

class Car extends Vehicle {

    km(): number {
        return this._km_actual
    }
   
    constructor(km_actual: number) {
        super('Coche', 4, km_actual);
    } 
}

class MotorBike extends Vehicle {

    km(): number {
        return this._km_actual
    }

    constructor(km_actual: number) {
        super('M-Bike', 2, km_actual);
    } 

}

class Printable {
    toString(vehicles: Vehicle[] ) : void {
        let str = String("");
        vehicles.forEach(it => {
            str += it.toString()
        });
        console.log("ToString\n "+str);
    }
}


let printable = new Printable();
let vehiculo1 = new Car(25000);
let vehiculo2 = new MotorBike(400);
let vehiculo3 = new Camion(70000);

printable.toString([vehiculo1,vehiculo2,vehiculo3]);
