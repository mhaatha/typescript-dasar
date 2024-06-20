import { perimeter } from "../../src/codewars/kyu5/perimeter-of-squares-in-a-rectangle";

describe("Perimeter of Squares in a Rectangle", () => {
  it("should pass sample tests", () => {
    expect(perimeter(5)).toBe(80);
    expect(perimeter(7)).toBe(216);
    expect(perimeter(20)).toBe(114624);
  });
});