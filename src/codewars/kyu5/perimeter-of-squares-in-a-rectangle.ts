export const perimeter = (n:number):number => {
  let squaresLength = 1;
  const num: number[] = [0, 1];

  for (let i = 0; i < n; i++) {
    const willPushed = num[num.length - 1] + num[num.length - 2];
    squaresLength += willPushed;
    num.push(willPushed);
  }
  
  return 4 * squaresLength;
}

/*
expect(perimeter(5)).toBe(80);
0: 1
1: 1
2: 2
3: 3
4: 5
5: 8
*/