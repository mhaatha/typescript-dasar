import { findNb } from "../../src/codewars/pile-of-cubes";

describe('Build a pile of cubes', () => {
  it('should return the number n of cubes i have build', () => {
    const result = findNb(1071225);
    expect(result).toBe(45);
  });
});