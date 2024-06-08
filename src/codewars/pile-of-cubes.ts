// https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/typescript

export function findNb(m: number): number {
  let counter: number = 1;
  let result: number = 0;
  while (result < m) {
    result += Math.pow(counter, 3);
    counter++;
  }
  return result !== m ? -1 : counter - 1;
}

// Formula: n^3 + (n−1)^3 + (n−2)^3 + ... + 1^3 = m