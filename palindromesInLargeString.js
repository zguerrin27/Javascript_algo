// return number of palindrome substrings in massive string
// dont count any smaller pal inside a larger pal

// there are even and odd length pals
// even has ...AA... in the middle 
// odd has ..ABA.. in the middle 
// in example below.. the BAB within ABABA should not be returned, but the BAB towards the end should 
// also both of the ABAs within ABABA should not be returned, but the ABA at the end should 


// let sent = 'kjABABAtCGHHGCinAAokBABuABA' 
//                       123         
// indexs of pals   2,4   2,6  4,6  8,13  16,17  20,22  24,26
// remove           2,4 and 4,6 because they are within 2,6 range



function returnPalSubStrings(s){
  let p1 = 0
  let p2 = 1
  let p3 = 2
  let pals = []
  // add base case for 1,2,3 letter string
  
  while(p3 < s.length){

    if(s[p1] === s[p3]){
        let oddPal = buildOddPal(s, p1, p3)       // build full length palindrome substring
        pals = addToList(pals, oddPal)            // add to pals array if this new pal passes checks
        pals = removeFromList(pals, oddPal)       // run the remove function incase this pal is a larger version of previous pal  
        p1++                                      
        p2++
        p3++
    } else if(s[p1] === s[p2]){
        let evenPal = buildEvenPal(s, p1, p2)  
        pals = addToList(pals, evenPal)
        pals = removeFromList(pals, evenPal)
        p1++
        p2++
        p3++
    } else {
      p1++
      p2++
      p3++
    }
  }
  return pals
}

// the ..AA.. palindrome pattern was found...expand pointers to find total size of palindrome
function buildEvenPal(s, p1, p2){
  let pal = '';
  while(p1 >= 0 && p2 < s.length){
    if(s[p1] === s[p2]){
      pal = s.substring(p1, p2+1)
      p1--
      p2++
    } else {
      break
    }
  }
  return {         // return object with the palindrome string, and the starting/ending indexs
    pal: pal,
    index1: p1+1,
    index2: p2-1
  }
}

// the ..ABA.. palindrome pattern was found...expand pointers to find total size of palindrome
function buildOddPal(s, p1, p3){
  let pal = '';
  while(p1 >= 0 && p3 < s.length){
    if(s[p1] === s[p3]){
      pal = s.substring(p1, p3+1)
      p1--
      p3++
    } else {
      break
    }
  }
  return {       // return object with the palindrome string, and the starting/ending indexs
    pal: pal,
    index1: p1+1,
    index2: p3-1
  }
}


// input string  =     'kjABABAtCGHHGCinAAokBABuABA' 
// pointers                      123         
// indexs of all pals       2,4   2,6  4,6  8,13  16,17  20,22  24,26
// remove 2,4 and 4,6 because they are within 2,6 range
// ending pal index pairs [[2,6],[8,13],[16,17],[20,22],[24,26]]

// start_index >= curr_start_index && end_index <= curr_end_index => remove existing elements in list
// start_index <= curr_start_index && end_index >= curr_end_index => dont add current element to list
// 2 <= 4 && 6 <= 6

function removeFromList(pals, palToAdd){
  if(pals.length <= 1) return pals
  let temp = []
  for(const entry of pals){
    if(entry.index1 === palToAdd.index1 && entry.index2 === palToAdd.index2) {
        temp.push(entry);
    } else if(entry.index1 <= palToAdd.index1 && entry.index2 <= palToAdd.index2 && entry.index2 >= palToAdd.index1 ){
      continue
    } else {
      temp.push(entry)
    }
  }
  return temp
}

// dont add a new pal to pals array if there is already a pal with a larger index range.
// ie dont add 4,6 if 3,7 exists
function addToList(pals, palToAdd){
  if(pals.find(pal => pal.index1 <= palToAdd.index1 && pal.index2 >= palToAdd.index2)){
    return pals
  } else {
    pals.push(palToAdd)
    return pals
  }
}


let sent = "kjABABAtCGHHGCinAAokBABuABA"
console.log(returnPalSubStrings(sent))
