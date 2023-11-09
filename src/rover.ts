import { directionN } from './rover-directions';
import { directionE } from './rover-directions';
import { directionS } from './rover-directions';
import { directionW } from './rover-directions';
import { Position } from './rover-initial-position';
import { position } from './rover-initial-position';


export function roverMove(instructionsSet: string): Position {
  let currentPos = { ...position };
  for (const instruction of instructionsSet) {
    if (currentPos.d === 'N') {
      currentPos = directionN(instruction, currentPos); 
    } else if (currentPos.d === 'S') {
      currentPos = directionS(instruction, currentPos);
    } else if (currentPos.d === 'E') {
      currentPos = directionE(instruction, currentPos);
    } else if (currentPos.d === 'W') {
      currentPos = directionW(instruction, currentPos);
    }
  }
  return currentPos;
}


