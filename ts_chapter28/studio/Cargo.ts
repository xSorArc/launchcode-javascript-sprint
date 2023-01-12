import { Payload } from './Payload';

// 1) Defined in Cargo.ts
// 2) Implements the Payload interface
// 3) Properties:
//      a. massKg should be a number.
//      b. material should be a string.
// 4) Constructor:
//      a. Parameter massKg should be a number.
//      b. Parameter material should be a string.
//      c. Sets value of this.massKg and this.materia

export class Cargo implements Payload{
    massKg: number;
    material: string;

    constructor(massKg: number, material: string) {
        this.massKg = massKg;
        this.material = material;
    }
}