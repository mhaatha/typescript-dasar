describe('Union type', () => {
  it('should support in typescript', () => {
    let sample: string | number | boolean = "Hafidz";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = false;
    console.info(sample);
  });

  it('should support typeod operation', () => {
    const process = (value: string | number | boolean) => {
      if (typeof value === 'string') {
        value = value.toUpperCase();
      } else if (typeof value === 'number') {
        value += 2;
      } else if (typeof value === 'boolean') {
        value = !value;
      }
      return value;
    };
    
    expect(process('hello hafidz')).toBe('HELLO HAFIDZ');
    expect(process(50)).toBe(52);
    expect(process(false)).toBe(true);
  })
});