import { disemvowel } from '../../src/codewars/disemvowel-trolls';

describe('Disemvowel Trolls', () => {
  it('should return a string without vowel words', () => {
    const result = disemvowel('This website is for losers LOL!');

    expect(result).toBe('Ths wbst s fr lsrs LL!');
  });
});