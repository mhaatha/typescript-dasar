describe("Function", () => {
  it("should support in typescript", () => {
    const sayHello = (name: string): string => {
      return `Hello ${name}`;
    };

    expect(sayHello("Hafidz")).toBe("Hello Hafidz");

    const printHello = (name: string): void => {
      console.info(`Hello ${name}`);
    };

    printHello("Hafidz");
  });

  it("should support default value", () => {
    const sayHello = (name: string = "Guest"): string => {
      return `Hello ${name}`;
    };

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Hafidz")).toBe("Hello Hafidz");
  });

  it("should support rest parameter", () => {
    const sum = (...values: number[]): number => {
      let total = 0;
      for (const value of values) {
        total += value;
      };

      return total;
    };

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it('should support optional parameter', () => {
    const sayHello = (firstName?: string, lastName?: string): string => {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`; 
      }
    };

    expect(sayHello("Eko")).toBe("Hello Eko");
    expect(sayHello("Eko", "Kurniawan")).toBe("Hello Eko Kurniawan");
  });

  it("should support function overloading", () => {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    };

    expect(callMe(20)).toBe(200);
    expect(callMe("Hafidz")).toBe("HAFIDZ");

  });
  
  it("should support function as parameter", () => {
    const sayHello = (name: string, filter: (name: string) => string): string => {
      return `Hello ${filter(name)}`;
    };

    const toUpper = (name: string): string => {
      return name.toUpperCase();
    };

    expect(sayHello("Hafidz", toUpper)).toBe("Hello HAFIDZ");

    expect(sayHello("Hafidz", (name: string): string => name.toUpperCase())).toBe("Hello HAFIDZ");
  });
});