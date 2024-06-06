// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/typescript

export const countBits = (n: number): number => {
  const binary: string[] | null = n.toString(2).match(/1/g);
  return binary?.length ?? 0;
}

// Optional Chaining (?.) & Nullish Coalescing (??)
// binary?.length akan mengembalikan undefined jika variabel binary adalah null
// ?? 0 akan mengembalikan 0 jika nilai di sebelah kiri adalah null atau undefined