import { rgb } from "../../src/codewars/kyu5/rgb-to-hex";

let one: number;
let two: number;
let three: number;

describe('RGB to HEX', () => {
  it('should pass sample tests', () => {
    one = 300;
    two = 255;
    three = 255;
    expect(rgb(one, two, three)).toBe('FFFFFF');

    one = -17;
    two = 292;
    three = 182;
    expect(rgb(one, two, three)).toBe('00FFB6');
  });
});