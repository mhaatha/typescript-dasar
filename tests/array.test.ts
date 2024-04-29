describe('Array', () => {
  it('should same with javascript', () => {
    const names: string[] = ['hafidz', 'athaya', 'ganteng'];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it('should support readonly array', () => {
    const hobbies: ReadonlyArray<string> = ['Bersepeda', 'Membaca'];
    console.info(hobbies);
  });

  it ('should support tuple', () => {
    const person: readonly [string, string, number] = ['hafidz', 'athaya', 19];
    console.info(person);
  });
});