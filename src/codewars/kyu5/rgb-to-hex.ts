// https://www.codewars.com/kata/513e08acc600c94f01000001/train/typescript

export const rgb = (r: number, g: number, b: number): string => {
  let result: string = '';
  const hexaValue: { [key: string]: string } = {
    '10': 'A',
    '11': 'B',
    '12': 'C',
    '13': 'D',
    '14': 'E',
    '15': 'F'
  }

  // R 
  if (r < 256 && r > -1) {
    let firstHexLeft: number = Math.floor(r / 16);
    if (firstHexLeft > 9) {
      result += hexaValue[firstHexLeft];
    } else {
      result += firstHexLeft;
    }
    let firstHexRight: number = Math.floor(r % 16);
    if (firstHexRight > 9) {
      result += hexaValue[firstHexRight];
    } else {
      result += firstHexRight;
    }
  } else if (r > 255) {
    result += 'FF';
  } else {
    result += '00';
  }

  // G
  if (g < 256 && g > -1) {
    let secondHexLeft: number = Math.floor(g / 16);
    if (secondHexLeft > 9) {
      result += hexaValue[secondHexLeft];
    } else {
      result += secondHexLeft;
    }
    let secondHexRight: number = Math.floor(g % 16);
    if (secondHexRight > 9) {
      result += hexaValue[secondHexRight];
    } else {
      result += secondHexRight;
    }
  } else if (g > 255) {
    result += 'FF';
  } else {
    result += '00';
  }

  // B
  if (b < 256 && b > -1) {
    let thirdHexLeft: number = Math.floor(b / 16);
    if (thirdHexLeft > 9) {
      result += hexaValue[thirdHexLeft];
    } else {
      result += thirdHexLeft;
    }
    let thirdHexRight: number = Math.floor(b % 16);
    if (thirdHexRight > 9) {
      result += hexaValue[thirdHexRight];
    } else {
      result += thirdHexRight;
    }
  } else if (b > 255) {
    result += 'FF';
  } else {
    result += '00';
  }

  return result;
}

/*
Formula: 
R/16 = Math.floor(x) + y -> y is remainder
G/16 = Math.floor(x) + y -> y is remainder
B/16 = Math.floor(x) + y -> y is remainder
*/