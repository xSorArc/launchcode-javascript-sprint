// 28.8 STUDIO: TypeScript
// 1) Create classes for Astronaut, Cargo, and Rocket. (Details below).
//      a. All classes should be defined in their own files.
// 2) Use the new classes to run a simulation in the index.ts file.
// In the starter code, you will notice that an interface named Payload has been declared. This interface ensures that any class that 
// implements it will have a massKg property
// 28.8.4 Simulation
// 1) Use the terminal in VSCode to compile your index.ts file. This will also compile the modules you imported into 
//    the file (Astronaut.ts, Rocket.ts, etc.).
// 2) Use the command node index.js to run the JavaScript file created during the build process.
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Rocket } from './Rocket';

let falcon9: Rocket = new Rocket('Falcon 9', 7500);

let astronauts: Astronaut[] = [
   new Astronaut(75, 'Mae'),
   new Astronaut(81, 'Sally'),
   new Astronaut(99, 'Charles')
];

for (let i = 0; i < astronauts.length; i++) {
   let astronaut = astronauts[i];
   let status = '';
   if (falcon9.addAstronaut(astronaut)) {
      status = "On board";
   } else {
      status = "Not on board";
   }
   console.log(`${astronaut.name}: ${status}`);
}

let cargo: Cargo[] = [
   new Cargo(3107.39, "Satellite"),
   new Cargo(1000.39, "Space Probe"),
   new Cargo(753, "Water"),
   new Cargo(541, "Food"),
   new Cargo(2107.39, "Tesla Roadster"),
];

for (let i = 0; i < cargo.length; i++) {
   let c = cargo[i];
   let loaded = '';
   if (falcon9.addCargo(c)) {
      loaded = "Loaded"
   } else {
      loaded = "Not loaded"
   }
   console.log(`${c.material}: ${loaded}`);
}

console.log(`Final cargo and astronaut mass: ${falcon9.currentMassKg()} kg.`);