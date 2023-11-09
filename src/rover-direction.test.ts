import { directionN } from "./rover-directions";
import { directionS } from "./rover-directions";
import { directionE } from "./rover-directions";
//import { directionW } from "./rover-directions";
import { Position } from './rover-initial-position';
import { position } from './rover-initial-position';
describe("Mars rover moves to North", () => {
  test("Moving first step towards North (M): (0, 1) N", () => {
    const NewPosition: Position = {
      x: 0,
      y: 1,
      d: 'N',
    };
    expect(directionN('M', position)).toEqual(NewPosition);
  });
  test("Turning right when heading North (R): (1, 0) E", () => {
    const position1New: Position = {
      x: 1,
      y: 0,
      d: 'E',
    };
    expect(directionN('R', position)).toEqual(position1New);
  });
});

describe("Mars rover moves to South", () => {
  test("Moving first step towards South (M): (0, -1) S", () => {
    const NewPosition: Position = {
      x: 0,
      y: -1,
      d: 'S',
    };
    expect(directionS('M', position)).toEqual(NewPosition);
  });
  test("Turning right (R) when heading South: (1, 0) E", () => {
    const position2New: Position = {
      x: 1,
      y: 0,
      d: 'E',
    };
    expect(directionS('R', position)).toEqual(position2New);
  });

});

describe("Mars rover moves to East", () => {
  test("Moving first step towards East (M): (1,0) E", () => {
    const NewPosition3: Position = {
      x: 1,
      y: 0,
      d: 'E',
    };
    expect(directionE('M', position)).toEqual(NewPosition3);
  });
  test("Turning right (R) when heading East (1, 0) E", () => {
    const position4New: Position = {
      x: 0,
      y: -1,
      d: 'S',
    };
    expect(directionE('R', position)).toEqual(position4New);
  });


});