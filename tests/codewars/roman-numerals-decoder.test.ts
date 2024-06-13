import { solution } from "../../src/codewars/roman-numerals-decoder";

let romanNum: string;

describe('Roman Numerals Decoder', () => {
  it('should pass sample tests', () => {
    romanNum = 'XXI';
    expect(solution(romanNum)).toBe(21);

    romanNum = 'MMVIII';
    expect(solution(romanNum)).toBe(2008);

    romanNum = 'MDCLXVI';
    expect(solution(romanNum)).toBe(1666);
  });
});