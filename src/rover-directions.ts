import { Position } from './rover-initial-position';
import { position } from './rover-initial-position';
import {isWithinPlateau } from './plateau';

// ↑ ----------------------------
export const directionN = (instruction: string, currentPosition: Position): ReturnType<typeof isWithinPlateau>  => {
  if (instruction === 'M') {
    return isWithinPlateau(currentPosition.x, currentPosition.y + 1, 'N')
  }
  if (instruction === 'L') {
    return { ...currentPosition, d: 'W' };
  }
  if (instruction === 'R') {
    return { ...currentPosition, d: 'E' };
  }
  return currentPosition;
};
//  ↓ ----------------------------
export const directionS = (instruction: string, currentPosition: Position): ReturnType<typeof isWithinPlateau>  => {
  if (instruction === 'M') {
    return isWithinPlateau(currentPosition.x, currentPosition.y - 1, 'S');
  }
  if (instruction === 'L') {
    return { ...currentPosition, d: 'E' };
  }
  if (instruction === 'R') {
    return {...currentPosition, d: 'W' };
  }
  return currentPosition;
};

// → ----------------------------
export const directionE = (instruction: string, currentPosition: Position): ReturnType<typeof isWithinPlateau>  => {
  if (instruction === 'M') {
    return isWithinPlateau(currentPosition.x + 1, currentPosition.y, 'E')
  }
  if (instruction === 'L') {
    return {...currentPosition, d: 'N' };
  }
  if (instruction === 'R') {
    return {...currentPosition, d: 'S' };
  }
  console.log(currentPosition.x, currentPosition.y);
  return currentPosition;
};

// ← ----------------------------
export const directionW = (instruction: string, currentPosition: Position): ReturnType<typeof isWithinPlateau>  => {
  if (instruction === 'M') {
    return isWithinPlateau(currentPosition.x -1, currentPosition.y, 'W')
    const XafterMove = currentPosition.x - 1;
  }
  if (instruction === 'L') {
    return {...currentPosition, d: 'S' };
  }
  if (instruction === 'R') {
    return {...currentPosition, d: 'N' };
  }
  return currentPosition;
};