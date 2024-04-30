// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/typescript

export function disemvowel(str: string): string {
  const re: RegExp = /[aAiIuUeEoO]/g;

  return str.replace(re, "");
}
