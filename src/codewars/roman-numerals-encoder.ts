// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/typescript

export default (number: number): string => {
  let result: string = '';
  const romanSymbol: { [key: number]: string } = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
  }
  while (number !== 0) {
    const closestKey = Object.keys(romanSymbol)
      .map(Number)
      .sort((a, b) => b - a)
      .find(key => key <= number);
    closestKey !== undefined ? result += romanSymbol[closestKey] : null;
    closestKey !== undefined ? number -= closestKey : null;
  }
  return result;
}

/*
1990
1000 + 900 + 90
M CM XC

2008
2000 + 8
MMVIII

1444
1000 + 400 + 40 + 4
M CD XL IV
*/

