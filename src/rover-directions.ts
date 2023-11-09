import { Position } from './rover-initial-position';

// ↑
export const directionN = (instruction: string, currentPosition: Position): Position => {
  if (instruction === 'M') {
    return { x: currentPosition.x, y: currentPosition.y + 1, d: 'N'};
  }
  if (instruction === 'L') {
    return { ...currentPosition, d: 'W' };
  }
  if (instruction === 'R') {
    return { ...currentPosition, d: 'E' };
  }
  return currentPosition;
};
//  ↓
export const directionS = (instruction: string, currentPosition: Position): Position => {
  if (instruction === 'M') {
    return { x: currentPosition.x, y: currentPosition.y - 1, d: 'S' };
  }
  if (instruction === 'L') {
    return { ...currentPosition, d: 'W' };
  }
  if (instruction === 'R') {
    return {...currentPosition, d: 'E' };
  }
  return currentPosition;
};

// →
export const directionE = (instruction: string, currentPosition: Position): Position => {
  if (instruction === 'M') {
    return {x: currentPosition.x + 1, y: currentPosition.y, d: 'E' };
  }
  if (instruction === 'L') {
    return {...currentPosition, d: 'N' };
  }
  if (instruction === 'R') {
    return {...currentPosition, d: 'S' };
  }
  return currentPosition;
};
// ←
export const directionW = (instruction: string, currentPosition: Position): Position => {
  if (instruction === 'M') {
    return {x: currentPosition.x - 1, y: currentPosition.y, d: 'W' };
  }
  if (instruction === 'L') {
    return {...currentPosition, d: 'S' };
  }
  if (instruction === 'R') {
    return {...currentPosition, d: 'N' };
  }
  return currentPosition;
};