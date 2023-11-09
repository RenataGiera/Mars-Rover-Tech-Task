const plateauWidth = 5;
const plateauHeight = 5;

export const isWithinPlateau = (x: number, y: number): boolean => {
  return x >= 0 && x <= plateauWidth && y >= 0 && y <= plateauHeight;
};