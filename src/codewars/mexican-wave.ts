// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/typescript

export const wave = (str: string): string[] => {
  const result: string[] = [];
  for (let i = 0; i < str.length; i++) {
    const currentWord = str.split('');
    currentWord[i] = currentWord[i].toUpperCase();
    currentWord[i] !== ' ' ? result.push(currentWord.join('')) : null;
  }
  return result;
}