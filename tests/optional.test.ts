describe("Optional Parameter", () => {
  it("should support null and undefined", () => {
    const sayHello = (name?: string | null) => {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hello");
      }
    };

    sayHello("Hafidz");

    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});