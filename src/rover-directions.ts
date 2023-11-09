import { Position } from './rover-initial-position';
import {isWithinPlateau } from './plateau';

// ↑ ----------------------------
export const directionN = (instruction: string, currentPosition: Position): Position => {
  if (instruction === 'M') {
    const YafterMove = currentPosition.y + 1;
    if (isWithinPlateau(currentPosition.x, YafterMove)) {
      return { x: currentPosition.x, y: YafterMove, d: 'N'};
    } else {
      throw new Error('Rover is out of the plateau boundaries.');
    }
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
export const directionS = (instruction: string, currentPosition: Position): Position => {
  if (instruction === 'M') {
    const YafterMove = currentPosition.y - 1;
    if (isWithinPlateau(currentPosition.x, YafterMove)) {
      return { x: currentPosition.x, y: YafterMove, d: 'S' };
    } else {
      throw new Error('Rover is out of the plateau boundaries.');
    }
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
export const directionE = (instruction: string, currentPosition: Position): Position => {
  if (instruction === 'M') {
    const XafterMove = currentPosition.x + 1;
    if (isWithinPlateau(XafterMove, currentPosition.y)) {
      return {x: XafterMove, y: currentPosition.y, d: 'E' };
    } else {
      throw new Error('Rover is out of the plateau boundaries.');
    }
  }
  if (instruction === 'L') {
    return {...currentPosition, d: 'N' };
  }
  if (instruction === 'R') {
    return {...currentPosition, d: 'S' };
  }
  return currentPosition;
};
// ← ----------------------------
export const directionW = (instruction: string, currentPosition: Position): Position => {
  if (instruction === 'M') {
    const XafterMove = currentPosition.x - 1;
    if (isWithinPlateau(XafterMove, currentPosition.y)) {
      return {x: XafterMove, y: currentPosition.y, d: 'W' };
    } else {
      throw new Error('Rover is out of the plateau boundaries.');
    }
  }
  if (instruction === 'L') {
    return {...currentPosition, d: 'S' };
  }
  if (instruction === 'R') {
    return {...currentPosition, d: 'N' };
  }
  return currentPosition;
};