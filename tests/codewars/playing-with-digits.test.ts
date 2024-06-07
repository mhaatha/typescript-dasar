import { G964 } from "../../src/codewars/playing-with-digits";

describe('Playing With Digits Test', () => {
  it('should return 51', () => {
    const result = G964.digPow(46288, 3);
    expect(result).toBe(51);
  });
});