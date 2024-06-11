import { wave } from "../../src/codewars/mexican-wave";

let result: string[];

describe('Mexican Wave', () => {
  it('should pass sample test', () => {
    result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
    expect(wave("hello")).toStrictEqual(result);

    result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
    expect(wave("codewars")).toStrictEqual(result);

    result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
    expect(wave("two words")).toStrictEqual(result);
  });
});