import { countBits } from "../../src/codewars/bit-counting";

describe('Bit Counting Test', () => {
  it('should return the number of bits that are equal to one', () => {
    const result = countBits(7270642125715099); // 1010 in binary => should return 2
    expect(result).toBe(26);
  });
}); 