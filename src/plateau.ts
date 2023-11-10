import { Position } from './rover-initial-position';
const plateauWidth = 5;
const plateauHeight = 5;

export const isWithinPlateau = (NewX: number, NewY: number, NewD: "N" | "E" | "S" | "W"): Position => {
  if (NewX >= 0 && NewX <= plateauWidth && NewY >= 0 && NewY <= plateauHeight) {
    return {x: NewX, y: NewY, d: NewD };
  } else {
    throw new Error('Rover is out of the plateau boundaries.');
  }
};