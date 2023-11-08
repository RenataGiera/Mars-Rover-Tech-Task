import { directionN } from "./rover-directions";
import { Position } from './rover-initial-position';
import { position } from './rover-initial-position';
describe("Mars rover moves to North", () => {
  test("Moving first step towards north (M) - (0, 1) N", () => {
    const NewPosition: Position = {
      x: 0,
      y: 1,
      d: 'N',
    };
    expect(directionN('M', position)).toEqual(NewPosition);
  });
  test("Turning right (R) - (1, 0) E", () => {
    const position1New: Position = {
      x: 1,
      y: 0,
      d: 'E',
    };
    expect(directionN('R', position)).toEqual(position1New);
  });
});

