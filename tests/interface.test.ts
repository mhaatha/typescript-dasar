import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/seller";
import { Person } from "../src/person";

describe('Interface', () => {
  it('should support in typescript', () => {
    const seller: Seller = {
      id: 1,
      name: "Toko ABC",
      address: "Jl. Pemuda",
      nib: "123123",
      npwp: "6868686"
    };

    seller.name = "Toko Hafidz";
    console.info(seller);
  });

  it('should support function interface', () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    };

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 3)).toBe(5);
  });

  it('should support indexable interface', () => {
    interface StringArray {
      [index: number]: string;
    };

    const name: StringArray = ["M", "Hafidz", "Athaya"];
    console.info(name); 
  });

  it('should support indexable interface for non number index', () => {
    interface StringDictionary {
      [key: string]: string;
    };

    const dictionary: StringDictionary = {
      "name": "Hafidz",
      "address": "Samarinda"
    };
    
    expect(dictionary["name"]).toBe("Hafidz");
    expect(dictionary["address"]).toBe("Samarinda");
  }); 

  it('should support extends interface', () => {
    const employee: Employee = {
      id: "1",
      name: "Hafidz",
      division: "IT"
    };

    console.info(employee);

    const manager: Manager = {
      id: "2",
      name: "Athaya",
      division: "IT",
      numberOfEmployees: 10
    };

    console.info(manager);
  });

  it('should support function in interface', () => {
    const person: Person = {
      name: "Hafidz",
      sayHello: (name: string): string => {
        return `Hello ${name}, my name is ${person.name}`;
      }
    };

    console.info(person.sayHello("Budi"));
  });

  it('should support intersection types', () => {
    interface HasName {
      name: string;
    }
    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "Hafidz"
    };

    console.info(domain);
  });

  it('should support type assertions', () => {
    const person: any = {
      name: "Hafidz",
      age: 19
    };

    const person2: Person = person as Person;
    console.info(person2);
  });
});