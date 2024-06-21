// https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/typescript

const isInt = (n: number): boolean => {
  return Number(n) === n && n % 1 === 0;
}

export const primeFactors = (n:number): string => {
  let num: number = n;
  let primeNum: number = 2;
  const myObj: {[key: number]: number} = {};
  let result: string = "";
  
  while (num !== 1) {
    // Mengecek angka apakah dapat dibagi oleh current primeNum ? 
    if (isInt(num / primeNum)) {
      if (myObj[primeNum] === undefined) {
        myObj[primeNum] = 1;
        num /= primeNum;
      } else {
        myObj[primeNum]++;
        num /= primeNum;
      }
    } else {
      if (myObj[primeNum] !== undefined) {
        if (myObj[primeNum] > 1) {
          result += `(${primeNum}**${myObj[primeNum]})`;
        } else {
          result += `(${primeNum})`;
        }
      }
      if (num % 2 === 1 && primeNum % 2 === 1) {
        primeNum += 2;
      } else {
        primeNum++;
      }
    }
  }

  if (myObj[primeNum] > 1) {
    return result += `(${primeNum}**${myObj[primeNum]})`
  } 
  
  return result += `(${primeNum})`;
}
