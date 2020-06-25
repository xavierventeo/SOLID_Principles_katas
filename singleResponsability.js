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
var Vehiculo = /** @class */ (function () {
    function Vehiculo(modelo, num_ruedas) {
        this._modelo = modelo;
        this._num_ruedas = num_ruedas;
    }
    Object.defineProperty(Vehiculo.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vehiculo.prototype, "num_ruedas", {
        get: function () {
            return this._num_ruedas;
        },
        enumerable: true,
        configurable: true
    });
    return Vehiculo;
}());
var Coche = /** @class */ (function (_super) {
    __extends(Coche, _super);
    function Coche() {
        return _super.call(this, 'Coche', 4) || this;
    }
    return Coche;
}(Vehiculo));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super.call(this, 'Moto', 2) || this;
    }
    return Moto;
}(Vehiculo));
var VehiculoPrintable = /** @class */ (function () {
    function VehiculoPrintable() {
    }
    VehiculoPrintable.log = function (vehiculo) {
        console.log('El vehículo ' + vehiculo.modelo + ' tiene ' + vehiculo.num_ruedas + ' ruedas');
    };
    return VehiculoPrintable;
}());
var coche = new Coche();
var moto = new Moto();
VehiculoPrintable.log(coche);
VehiculoPrintable.log(moto);
