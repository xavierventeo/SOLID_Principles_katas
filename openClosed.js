var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(modelo, num_ruedas, km_actual) {
        this._modelo = modelo;
        this._num_ruedas = num_ruedas;
        this._km_actual = km_actual;
    }
    Object.defineProperty(Vehicle.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "num_ruedas", {
        get: function () {
            return this._num_ruedas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "km_actual", {
        get: function () {
            return this._km_actual;
        },
        enumerable: true,
        configurable: true
    });
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(km_actual) {
        return _super.call(this, 'Coche', 4, km_actual) || this;
    }
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(km_actual) {
        return _super.call(this, 'Moto', 2, km_actual) || this;
    }
    return Bike;
}(Vehicle));
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.Area = function (vehicles) {
        var kilometraje = 0;
        vehicles.forEach(function (it) {
            kilometraje += it.km_actual;
        });
        return kilometraje;
    };
    return Calculator;
}());
var calculator = new Calculator();
var vehiculo1 = new Car(25000);
var vehiculo2 = new Bike(5000);
var res = calculator.Area([vehiculo1, vehiculo2]);
console.log("Total Kilometraje: " + res);
