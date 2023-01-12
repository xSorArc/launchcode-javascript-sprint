import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

/* 
1) Defined in Rocket.ts.
2) Properties
3) Constructor:
    a. Parameter name should be a string.
    b. Parameter totalCapacityKg should be a number.
    c. Sets value of this.name and this.totalCapacityKg
4) Methods:
    a. sumMass( items: Payload[] ): number
        - Returns the sum of all items using each item's massKg property
    b. currentMassKg(): number
        - Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    c. canAdd(item: Payload): boolean
        - Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    d. addCargo(cargo: Cargo): boolean
        - Uses this.canAdd() to see if another item can be added.
        - If true, adds cargo to this.cargoItems and returns true.
        - If false, returns false.
    e. addAstronaut(astronaut: Astronaut): boolean
        - Uses this.canAdd() to see if another astronaut can be added.
        - If true, adds astronaut to this.astronauts and returns true.
        - If false, returns false*/
export class Rocket {
    name: string;                   // 2a. name should be a string.
    totalCapacityKg: number;        // 2b. totalCapacityKg should be a number.
    cargoItems: Cargo[] = [];            // 2c. cargoItems should be an array of Cargo objects.
    astronauts: Astronaut[] = [];        // 2d. astronauts should be an array of Astronaut objects.

    // Sets value of this.name and this.totalCapacityKg
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    // 4a. Returns the sum of all items using each item's massKg property
    sumMass(items: Payload[]): number {
        let sum: number = 0;

        for (let i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    }

    // 4b. Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    currentMassKg(): number {
        let astronautMass: number = this.sumMass(this.astronauts);
        let cargoMass: number = this.sumMass(this.cargoItems);
        return astronautMass + cargoMass;
    }
    
    // 4c. Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    }
    
    // 4d. Uses this.canAdd() to see if another item can be added.
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            // If true, adds cargo to this.cargoItems and returns true.
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }

    // 4e. Uses this.canAdd() to see if another astronaut can be added.
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            // If true, adds astronaut to this.astronauts and returns true.
            this.astronauts.push(astronaut);
            return true;
        }
        return false
    }
}