// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/typescript

// Fungsi untuk menjumlahkan setiap berat
const getWeights = (num: string): number => {
  return num.split('').map(Number).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export const orderWeight = (strng: string): string => {
  const splittedArr = strng.split(' ');
  const weightedNumbers = splittedArr.map(num => ({
    value: num,
    weight: getWeights(num),
  }));

  const sortedNumber = weightedNumbers.sort((a, b) => {
    if (a.weight === b.weight) {
      return a.value.localeCompare(b.value);
    }
    return a.weight - b.weight;
  });

  return sortedNumber.map(obj => obj.value).join(' ');
}