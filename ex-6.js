let height = undefined;
let result;

let isUndefined = (value) => {
  let result = value ?? `Height is not defined`;

  return result;
};

console.log(isUndefined(height)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
console.log(isUndefined(result));
