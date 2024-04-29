import { Category, Product } from "../src/type-alias";

describe('Type Alias', () => {
  it('should support in typescript', () => {
    const category: Category = {
      id: 1,
      name: "Food",
    };

    const product: Product = {
      id: "1",
      name: "Nasi Goreng",
      price: 10000,
      category: category,
      description: "Nasi goreng enak."
    };

    console.info(category);
    console.info(product);
  });
});