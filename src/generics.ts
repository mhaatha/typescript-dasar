// Hello World of generic
const identity = <Type>(arg: Type): Type => {
  return arg;
}
const outputString = identity<string>("MyString.");
const outputTypeArgumentInference = identity("This is type argument inference.");
const outputNumber = identity<number>(1);

// Working with Generic Type Variables
const loggingIdentity = <Type>(arg: Type[]): Type[] => {
  console.log(arg.length);
  return arg;
}
// Or you can write like this
const loggingIndetityAnotherWay = <Type>(arg: Array<Type>): Array<Type> => {
  console.log(arg.length);
  return arg;
}

// Generic Types
const myIdentity: <Type>(arg: Type) => Type = identity;
const resultOne = myIdentity("This is result 1");
const resultTwo = myIdentity(2);
console.log(resultOne, resultTwo);