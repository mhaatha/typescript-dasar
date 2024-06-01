// https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/typescript

/*
[ Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    ]
[ Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison ]
[0, 0]
["right", "down", "left", "left", "left", "left", "right"];
Selection cursor is circular horizontally but not vertically!
0 right honda, 1 chun li, 2 ken, 3 
Jika ke kanan maka [n, n + 1]
Jika ke kiri maka [n, n - 1]
Jika ke atas maka [n - 1, n]
Jika ke bawah maka [n + 1, n]
*/

export type Move = "down" | "up" | "right" | "left"

export const streetFighterSelection = (fighters: string[][], position: number[], moves: Move[]): string[] => {
  const result: string[] = [];
  let currentPosition: number[] = position;

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "right":
        currentPosition[1] = (currentPosition[1] === 5) ? 0 : currentPosition[1] + 1;
        break;
      case "left":
        currentPosition[1] = (currentPosition[1] === 0) ? 5 : currentPosition[1] - 1;
        break;
      case "up":
        currentPosition[0] = (currentPosition[0] === 0) ? 0 : currentPosition[0] - 1;
        break;
      case "down":
        currentPosition[0] = (currentPosition[0] === 1) ? 1 : currentPosition[0] + 1;
        break;
      default:
        console.error(`Unexpected move: ${moves[i]}`);
        break;
    }
    const currentFighters: string = fighters[currentPosition[0]][currentPosition[1]];
    result.push(currentFighters);
  }

  return result;
}