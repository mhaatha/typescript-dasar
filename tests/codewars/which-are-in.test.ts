import { inArray } from "../../src/codewars/which-are-in";

describe('Which Are In?', () => {
  it('should return a sorted array in lexicographical order', () => {
    const result = inArray(["arp", "live", "strong", "lyal"], ["lively", "alive", "harp", "sharp", "armstrong"]);
    expect(result).toStrictEqual(["arp", "live", "strong"]);
  });
});