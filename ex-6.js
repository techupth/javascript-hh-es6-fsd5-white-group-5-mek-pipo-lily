let height = undefined;
let result;

function isHeightUndefined(height) {
  result = height ?? "Height is not defined";
  return result;
}
result = isHeightUndefined(height);
console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
