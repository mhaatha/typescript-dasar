import { dirReduc } from "../../src/codewars/kyu5/directions-reduction";

let arr: string[];

describe('Directions Reduction', () => {
  it('should pass sample tests', () => {
    arr = ['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'];
    expect(dirReduc(arr)).toStrictEqual(['WEST']);

    arr = ['NORTH','SOUTH','SOUTH','EAST','WEST','NORTH'];
    expect(dirReduc(arr)).toStrictEqual([]);
  });
});