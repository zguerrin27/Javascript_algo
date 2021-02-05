//given a string...return how many characters must be delete to ensure that there are no adjacent chars. 
//let s = 'aaaa'  >>> 'a' (3 deletions)
//let s = 'aaabbb' >>> 'ab' (4 deletions)

function alternatingCharacters(s) {
  let counter = 0
  for(let i = 0; i < s.length - 1; i++){
      if(s[i] === s[i+1]){
        s.slice(i, 1)
        counter++
      }
  }
  return counter
}