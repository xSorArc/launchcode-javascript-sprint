"use strict";
exports.__esModule = true;
exports.Astronaut = void 0;
// 1) Defined in Astronaut.ts
// 2) Implements the Payload interface
// 3) Properties:
//      a. massKg should be a number.
//      b. name should be a string.
// 4) Constructor:
//      a. Parameter massKg should be a number.
//      b. Parameter name should be string.
//      c. Sets value of this.massKg and this.name
var Astronaut = /** @class */ (function () {
    function Astronaut(massKg, name) {
        this.massKg = massKg;
        this.name = name;
    }
    return Astronaut;
}());
exports.Astronaut = Astronaut;
