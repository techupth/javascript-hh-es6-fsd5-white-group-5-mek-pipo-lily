function sum(...num) {
  let result = 0;

  for (let i = 0; i < num.length; i++) {
    result = result + num[i];
  }
  return result;
}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
