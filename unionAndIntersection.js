function returnUnionAndIntersection(a,b){
  let union = []
  let intersections = []
  let p1 = 0
  let p2 = 0
  while(union.length < (a.length + b.length)){
    let isAEmpty = p1 >= a.length
    let isBEmpty = p2 >= b.length
    if(!isAEmpty && (isBEmpty || (a[p1] < b[p2]))){
      union.push(a[p1])
      p1++
    } else {
      union.push(b[p2])
      p2++
    }
      if(b.includes(a[p1]) && !intersections.includes(a[p1])){
        intersections.push(a[p1])
      }
  }
  
  return [union, intersections]
  
}


let a1 = [1,3,5,10]
let a2 = [1,2,4,5,10]

// [[1,1,2,3,4,5,5,10,10], [1,5,10]]

console.log(returnUnionAndIntersection(a1,a2))