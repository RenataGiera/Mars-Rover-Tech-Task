import { roverMove } from './rover';

const marsRover1 = roverMove('RMM');
const marsRover2 = roverMove('RMMM');

console.log(`marsRover1: ${JSON.stringify(marsRover1)}, marsRover2: ${JSON.stringify(marsRover2)}`);