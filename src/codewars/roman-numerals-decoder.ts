// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/typescript

const romanSymbol: { [key: string]: number } = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
}  

export const solution = (roman: string): number => {
  let result: number = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentValue = romanSymbol[roman[i]];
    const nextValue = romanSymbol[roman[i + 1]];

    if (i !== roman.length - 1) {
      if (currentValue >= nextValue) {
        result += currentValue;
      } else {
        const newValue =  nextValue - currentValue;
        result += newValue;
        i += 1;
      }
    } else {
      result += currentValue;
    }
  }
  return result;
}

/*
MDCLXVI
M if M + 1 lebih besar dari M maka M + 1 - M jika tidak result += M -> 1000
D -> 500
C -> 100
L -> 50
X -> 10
V -> 5
I -> 1
*/