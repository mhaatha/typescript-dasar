import { sayHello } from "../src/say-hello"

describe('sayHello', function() {
  it('should return hello hafidz', function() {
    expect(sayHello('Hafidz')).toBe('Hello Hafidz');
  });
});