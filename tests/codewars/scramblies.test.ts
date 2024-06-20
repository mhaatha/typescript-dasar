import { scramble } from "../../src/codewars/kyu5/scramblies";

let scrambledWord: string;
let word: string;

describe("Scramblies", () => {
  it("should pass sample tests", () => {
    scrambledWord = "rkqodlw";
    word = "world";
    expect(scramble(scrambledWord, word)).toBe(true);

    scrambledWord = "katas";
    word = "steak";
    expect(scramble(scrambledWord, word)).toBe(false);

    scrambledWord = "scriptjavx";
    word = "javascript";
    expect(scramble(scrambledWord, word)).toBe(false);
  });
});