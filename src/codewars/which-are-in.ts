// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/typescript

export const inArray = (a1: string[], a2: string[]): string[] => {
  const result: string[] = [];
  const joinedA2: string = a2.join(',');

  for (let i = 0; i < a1.length; i++) {
    let regex = new RegExp(a1[i], 'i');
    if (regex.test(joinedA2)) result.push(a1[i]);
  }
  
  return result.sort();
}

/*
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Problems while i solve this kata
1. serializes to the same string
solution: replace toBe method with toStrictEqual to make a deep equality comparison
*/