import { Position } from './rover-initial-position';

// ↑
export const directionN = (instruction: string, currentPosition: Position): Position => {
  if (instruction === 'M') {
    return { x: currentPosition.x, y: currentPosition.y + 1, d: 'N'};
  }
  if (instruction === 'L') {
    return { x: currentPosition.x - 1, y: currentPosition.y, d: 'W' };
  }
  if (instruction === 'R') {
    return { x: currentPosition.x + 1, y: currentPosition.y, d: 'E' };
  }
  return currentPosition;
};
//  ↓
export const directionS = (instruction: string, currentPosition: Position): Position => {
  if (instruction === 'M') {
    return { x: currentPosition.x, y: currentPosition.y - 1, d: 'S' };
  }
  if (instruction === 'L') {
    return { x: currentPosition.x - 1, y: currentPosition.y, d: 'W' };
  }
  if (instruction === 'R') {
    return {x: currentPosition.x + 1, y: currentPosition.y, d: 'E' };
  }
  return currentPosition;
};

// →
export const directionE = (instruction: string, currentPosition: Position): Position => {
  if (instruction === 'M') {
    return {x: currentPosition.x + 1, y: currentPosition.y, d: 'E' };
  }
  if (instruction === 'L') {
    return {x: currentPosition.x, y: currentPosition.y + 1, d: 'N' };
  }
  if (instruction === 'R') {
    return {x: currentPosition.x, y: currentPosition.y - 1, d: 'S' };
  }
  return currentPosition;
};