const merge = (a, b) => {
  let result = []
  let aPointer = 0
  let bPointer = 0
  while(result.length < (a.length + b.length)){  // cant have a result longer than length of both arrays
    let isAdepleted = aPointer >= a.length;
    let isBdepleted = bPointer >= b.length;
    
    if(!isAdepleted && (isBdepleted || (a[aPointer] < b[bPointer]))){   // if a is not depleted, and either b is depleted or aPointer is less than bPointer                                                                        or array a is not depleted and a current index is                                                                           less than b current index....
      result.push(a[aPointer])   
      aPointer++
    } else {
      result.push(b[bPointer])
      bPointer++
    }
  }
  return result
  
}

const arr1 = [3, 5, 6, 10, 11, 20];
const arr2 = [1, 2, 7, 8, 15, 19, 100, 200, 300];

console.log(merge(arr1, arr2))