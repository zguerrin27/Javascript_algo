//Given a sentence with only spaces and no punctuation, reverse the order of the words.

const reverse = (s) => {
  let str = s.replace(/\s+/g,' ').split(' ')

  let left = 0
  let right = str.length - 1

  
  while(left < right){
    let temp = str[left]
    str[left] = str[right]
    str[right] = temp
    left++
    right--
  }
  
  return str.join(' ')
 
}

let sentence = "the other day I went    to the mall"  //  "mall the to went I day other the"

console.log(reverse(sentence))



// this completly reverses string...not just word order 
function reverse(str) {
  let cleanedString = str.replace(/\s+/g, ' ')
  
  let reversed = '';

  for (let character of cleanedString) {
    reversed = character + reversed;
  }

  return reversed;
}



let sentence = "the other day I went      to the mall"    // "llam eht ot tnew I yad rehto eht"

console.log(reverse(sentence))




/// this completly reverses string in place using substring. idea is merge sort


const reverseInPlace = (s) => {

  if (s.length < 2) return s; 

  console.log("s.length:", s.length)

  var hIndex = Math.ceil(s.length / 2); 


  console.log("hIndex", hIndex)
  console.log("sub-string starting at hindex", s.substr(hIndex))
  console.log("sub-string w/ 0 to hindex", s.substr(0, hIndex))
  console.log("s", s)
  console.log("==========================")

  return reverseInPlace(s.substr(hIndex)) + reverseInPlace(s.substr(0, hIndex)); 

}

let sent = "the other day"

console.log(reverseInPlace(sent))



// this reverses every letter other than special characters

var stringIn = 'My! name.is@rin';
var rev = stringIn.replace(/[a-z]+/gi, function(s){return s.split('').reverse().join('')});
document.write(rev); // yM! eman.si@nir




let check=(str)=>{
  let pat=/[a-zA-z]/igm;
  if(str.match(pat)){
      return true
  }else{
      return false
  }
}

let r=(str)=>{
  let arr=str.split('');
  let l=0;
  let r=arr.length-1;
  while(l<r){
      if (!check(arr[l])){
          l++;
      }else if(!check(arr[r])){
          r--;
      }else{
          let tmp=arr[l];
          arr[l]=arr[r];
          arr[r]=tmp;
          l++;
          r--;
      }
  }
return arr.join('');
}

