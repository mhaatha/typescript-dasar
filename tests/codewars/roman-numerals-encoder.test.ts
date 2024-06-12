import solution from '../../src/codewars/roman-numerals-encoder';

let romanNumber:number; 

describe('Roman Numerals Encoder', () => {
  it('should pass sample tests', () => {
    romanNumber = 1000;
    expect(solution(romanNumber)).toBe('M');

    romanNumber = 4;
    expect(solution(romanNumber)).toBe('IV');

    romanNumber = 1990;
    expect(solution(romanNumber)).toBe('MCMXC');
  });
});