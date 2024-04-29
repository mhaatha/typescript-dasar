describe('Any', () => {
  it('should support in typescript', () => {
    const person: any = {
      id: 1,
      name: 'hafidz',
      age: 19
    };

    person.age = 20;
    
    console.info(person);
  });
});