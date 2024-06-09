import { bouncingBall } from "../../src/codewars/bouncing-balls";

describe('Bouncing Balls', () => {
  it('should return how many times will the mother see the ball', () => {
    const result = bouncingBall(144, 0.6, 1.4);
    expect(result).toBe(19);
  });
});