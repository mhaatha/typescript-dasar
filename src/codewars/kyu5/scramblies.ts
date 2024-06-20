// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/typescript

export const scramble = (str1: string, str2: string): boolean => {
  const objStr1: {[key: string]: number} = {};
  for (let i = 0; i < str1.length; i++) {
    if (objStr1[str1[i]] === undefined) {
      objStr1[str1[i]] = 1;
    } else {
      objStr1[str1[i]]++;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    if (objStr1[str2[i]] > 0) {
      objStr1[str2[i]]--;
    } else {
      return false;
    }
  }
  
  return true;
}