// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/typescript

export const dirReduc = (arr: string[]): string[] => {
  const opposite: { [key: string]: string } = {
    WEST: "EAST",
    EAST: "WEST",
    SOUTH: "NORTH",
    NORTH: "SOUTH"
  }
  const container: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (container[container.length - 1] === opposite[arr[i]]) {
      container.pop();
    } else {
      container.push(arr[i]);
    }
  }
  return container;
}

/*
    N
  W + E
    S

That is if the task is to reduce the steps to the most optimal.

The actual task is:

    Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

From, NWSE. There's no WE, EW, SN, or NS. Which means, you don't need to reduce it. 
*/