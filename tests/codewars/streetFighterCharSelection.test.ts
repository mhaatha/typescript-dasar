import { streetFighterSelection, Move } from "../../src/codewars/streetFighterCharSelection";

describe('Street Fighter Characters Selection', () => {
  it('should return an array containing the selected characters', () => {
    const fighters: string[][] = [
      ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
      ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ];
    const initialPosition: number[] = [0, 0];
    const moves: Move[] = ["right", "down", "left", "left", "left", "left", "right"];

    const result = streetFighterSelection(fighters, initialPosition, moves);

    expect(result).toStrictEqual(['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']);
  });
});