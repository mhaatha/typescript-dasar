import { primeFactors } from "../../src/codewars/kyu5/primes-in-numbers";

let n: number;

describe("Prime in numbers", () => {
  it("should pass sample tests", () => {
    n = 21845915;
    expect(primeFactors(n)).toBe("(5)(7**2)(13)(19**3)");
  });
});