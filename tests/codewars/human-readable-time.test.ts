import { humanReadable } from "../../src/codewars/kyu5/human-readable-time";

let seconds: number;

describe('Human Readble Time', () => {
  it('should pass sample tests', () => {
    seconds = 5;
    expect(humanReadable(seconds)).toBe('00:00:05');

    seconds = 86399;
    expect(humanReadable(seconds)).toBe('23:59:59');

    seconds = 86399;
    expect(humanReadable(seconds)).toBe('23:59:59');
  });
});