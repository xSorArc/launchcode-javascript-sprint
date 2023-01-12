"use strict";
exports.__esModule = true;
exports.Cargo = void 0;
// 1) Defined in Cargo.ts
// 2) Implements the Payload interface
// 3) Properties:
//      a. massKg should be a number.
//      b. material should be a string.
// 4) Constructor:
//      a. Parameter massKg should be a number.
//      b. Parameter material should be a string.
//      c. Sets value of this.massKg and this.materia
var Cargo = /** @class */ (function () {
    function Cargo(massKg, material) {
        this.massKg = massKg;
        this.material = material;
    }
    return Cargo;
}());
exports.Cargo = Cargo;
