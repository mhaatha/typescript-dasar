import { pigIt } from "../../src/codewars/kyu5/simple-pig-latin";

let word: string;

describe('Simple Pig Latin', () => {
  it('should pass sample tests', () => {
    word = 'Pig latin is cool';
    expect(pigIt(word)).toBe('igPay atinlay siay oolcay');

    word = 'Hello world !';
    expect(pigIt(word)).toBe('elloHay orldway !');
  });
});