import { orderWeight } from "../../src/codewars/kyu5/weight-for-weight";

let weights: string;

describe('Weight for Weight', () => {
  it('should pass sample tests', () => {
    weights = '103 123 4444 99 2000';
    expect(orderWeight(weights)).toBe('2000 103 123 4444 99');

    weights = '2000 10003 1234000 44444444 9999 11 11 22 123';
    expect(orderWeight(weights)).toBe('11 11 2000 10003 22 123 1234000 44444444 9999');
  });
});