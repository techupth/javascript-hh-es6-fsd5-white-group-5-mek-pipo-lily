let height = undefined;
let result;

function checkIfDefine(height) {
  result = height ?? "Height is not defined";
}

checkIfDefine(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
