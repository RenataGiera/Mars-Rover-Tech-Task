# Mars Rover TypeScript project with Tests

This program moves Mars Rover around the surface of Mars!
The plateau is a square. Rover inital position is 0 0 N.
To move a Rover around the Plateau, you have to use the following string:

- L turns the Rover left without moving
- R turns the Rover right without moving
- M moves the Rover forward depending on the direction.
  The program input shoud be a string with L, R, M letters only - roverMove('RMM')

Program takes the object with the rover possiton and direction (N, E, S, W) and returns the object with new possiton.

When the coordinates are outside the plateau area ((0,0), (5,5)) the program throw an error.

## Instructions

- Run `npm install` followed by `npm test` to run the tests

# Future thoughts

I can add a function that checks the rover's position at a specific time so that the rovers do not collide.
