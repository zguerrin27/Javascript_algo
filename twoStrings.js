function twoStrings(s1, s2) {
  let s1Hash = makeHT(s1)
  let s2Hash = makeHT(s2)
  let res = ""
  
  if( (Object.keys(s1Hash).length) <= (Object.keys(s2Hash).length) ){
    res = checkForPresence(s1Hash, s2Hash)
  } else {
    res = checkForPresence(s2Hash, s1Hash)
  }
  
  return res
  
}

function checkForPresence(smaller, larger){
  for(const key in smaller){
    if(larger[key]){
      return "YES"
    } 
  }
  return "NO"
}

function makeHT(arr){
  let ht = {}
  for(const el of arr){
    if(!ht[el]){
      ht[el] = 1
    } else {
      ht[el]++
    }
  }
  return ht
}

let uno = "hello"
let dos = "world"

console.log(twoStrings(uno, dos))


