import { roverMove } from "./rover";
import { Position } from './rover-initial-position';
import { position } from './rover-initial-position';

describe("test Mars Rover moves", () => {
  test("Test moving forward 3 steps North direction (MMM) (0,3) N", () => {
    const NewPositionAllMoves: Position = {
      x: 0,
      y: 3,
      d: 'N',
    };
    expect(roverMove('MMM')).toEqual(NewPositionAllMoves);
  });
  test("Test moving (RM) (2,0) E", () => {
    const NewPositionAllMoves1: Position = {
      x: 2,
      y: 0,
      d: 'E',
    };
    expect(roverMove('RM')).toEqual(NewPositionAllMoves1);
  });

})

