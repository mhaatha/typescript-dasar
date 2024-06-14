// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

export const pigIt = (a : string) : string =>  {
  const splittedWords: string[] = a.split(' ');
  for (let i = 0; i < splittedWords.length; i++) {
    if (/\w/i.test(splittedWords[i])) {
      splittedWords[i] = splittedWords[i].slice(1, splittedWords[i].length) + splittedWords[i][0] + 'ay';
    }
  }
  return splittedWords.join(' ');
}