function sum(...input) {
  // Start coding here !
  const sumResult = input.reduce(function (accumulator, number) {
    return accumulator + number;
  }, 0);
  return sumResult;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
