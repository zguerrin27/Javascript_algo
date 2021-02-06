// flatten a nested array
// [1] -> [1]
// [1,2,3] -> [1,2,3]
// [1,2,[4,5,[6]]] -> [1,2,4,5,6]

// const data = [
//   [1, 2, 3],
//   [4, [5, 6]],
//   [[7], [8, [9]]],        --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   10
// ];

function flattenArray(arr, result = []){
  for(const entry of arr){
    if(Array.isArray(entry)){
      flattenArray(entry, result)
    } else {
      result.push(entry)
    }
  }
  return result
}



// let arr1 = [1,2,3]
const data = [
  [1, 2, 3],
  [4, [5, 6]],
  [[7], [8, [9]]],
  10
];
console.log(flattenArray(data))