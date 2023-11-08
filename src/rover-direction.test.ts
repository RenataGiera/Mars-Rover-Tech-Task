import { directionN } from "./rover-directions";
import { Position } from './rover-initial-position';
import { position } from './rover-initial-position';
describe("Mars rover moves to North", () => {
  test("Moving first step towards north (M) - (0, 1, N)", () => {
    const NewPosition: Position = {
      x: 0,
      y: 1,
      d: 'N',
    };
    expect(directionN('M', position)).toEqual(NewPosition);
  });
  test("Moving second step towards north (M) - (0, 2, N)", () => {
    const position1: Position = {
      x: 0,
      y: 1,
      d: 'N',
    };
    const position1New: Position = {
      x: 0,
      y: 2,
      d: 'N',
    };

    expect(directionN('M', position1)).toEqual(position1New);
  });
 
})

