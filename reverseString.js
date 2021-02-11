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


  // console.log("hIndex", hIndex)
  // console.log("sub-string starting at hindex", s.substr(hIndex))
  // console.log("sub-string w/ 0 to hindex", s.substr(0, hIndex))
  // console.log("s", s)
  // console.log("==========================")

  return reverseInPlace(s.substr(hIndex)) + reverseInPlace(s.substr(0, hIndex)); // breaks halfs into halfs into halfs..untill less than two...then adds them all together

}

let sent = "the other day"

console.log(reverseInPlace(sent))
//==================================================================================================================


// this reverses every letter other than special characters

var stringIn = 'My! name.is@rin';
var rev = stringIn.replace(/[a-z]+/gi, function(s){return s.split('').reverse().join('')});
console.log(rev); // yM! eman.si@nir


//==================================================================================================================

// reverses complete order of string for everything but non-letter characters
//let sentence = "My! name.is@rin"  --> "ni! rsie.ma@nyM"


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

//==================================================================================================================

//Given a sentence with a set of delimiters, reverse the order of the words in the sentence and keep the delimiters in place. 
//doesnt work on spaces...the isAlpha needs to be better. 

let isAlpha = (char) => {
  let pat = /\w+/g;     // match any alphabetic character
  if(char.match(pat)){
      return true
  } else {
      return false
  }
}

function reverse(s){
  
  let specialArr = []   

  for(ltr of s){ 
    if(!isAlpha(ltr)){                        // pull out all special characters in order
      specialArr.push(ltr)
    } 
  }
  
  let regCharArr = s.split(/[^a-z]/ig).reverse()     // use split to pull out all words separated by non alpha characters. then reverse
  
  let result = []                                    // init result array
  
  if(isAlpha(s[0])){
    result = regCharArr.flatMap((val, idx) => [val, specialArr[idx]])   //use flatmap to combine the two arrays...if origin array starts with letter, combine special array into reg array
  }
  
  if(!isAlpha(s[0])){
    result = specialArr.flatMap((val, idx) => [val, regCharArr[idx]])    // vice versa
  }

  for(let i = 0; i < result.length; i++){         // remove any undefineds
    if(result[i] === undefined){
      result.splice(i, 1)
    }
  }
  return result.join('')
}


// let sentence = "one|twotwo/three:four"  // four|three/twotwo:one
let sentence = "|brian/steve:chris|jon"     // |jon/chris:steve|brian

console.log(reverse(sentence))

//==================================================================================================================


function reverseWordOrderSameSeparatorOrder(str) {
  const reverseWordList = (str.match(/\w+/g) || []).reverse();
  const separatorList = (str.match(/\W+/g) || []);

  const initialValue =
    str.startsWith(separatorList[0])
    ? separatorList.shift()
    : '';

  return reverseWordList.reduce((value, word) =>
    [value, word, separatorList.shift()].join(''),
    initialValue
  );
}
console.log("decompose ...'one|twotwo/three:four'... into...");
console.log('one|twotwo/three:four'.match(/\w+/g).reverse());
console.log('one|twotwo/three:four'.match(/\W+/g));

let sentence = "#one |twotwo/three:four"  // "#four |three/twotwo:one"

console.log(reverseWordOrderSameSeparatorOrder(sentence))