var arrays = [[1, 2, 3], [4, 5], [6]];
var collapsedArrays = arrays.reduce(function(accumulator, currentValue) {
  return accumulator.concat(currentValue);
});

console.log("Развёрнутые массивы");
console.log(arrays);
console.log("Свёрнутые массивы");
console.log(collapsedArrays);