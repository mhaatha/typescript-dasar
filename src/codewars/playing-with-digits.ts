// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/typescript

export class G964 {

  public static digPow = (n: number, p: number) => {
    const splittedNum: string = n.toString();
    let result: number = 0;
    for (let i = 0; i < splittedNum.length; i++) {
      result += Math.pow(Number(splittedNum[i]), p);
      p += 1;
    }
    return result % n ? -1 : result / n;
  }

}

// Bisa juga for loopnya diganti pakai reduce
/*
  const splittedNum: number = n
      .toString()
      .split('')
      .map(Number)
      .reduce((total, currentNumber, index) => total + Math.pow(currentNumber, p + index), 0)
  
  return splittedNum % n ? -1 : splittedNum / n
*/