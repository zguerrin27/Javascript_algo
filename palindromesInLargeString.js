// return palindrome word substrings in a large string
// ignore  any smaller palindromes inside a larger pal

// there are even and odd length pals
// even has ...AA... in the middle 
// odd has ..ABA.. in the middle 
// in example below.. the BAB within ABABA should not be returned, but the BAB towards the end should 
// also both of the ABAs within ABABA should not be returned, but the ABA at the end should 
// a palindrome word is two or more characters.. so "A" is not viewed as Palindrome


// let sent = 'kjABABAtCGHHGCinAAokBABuABA' 
// pointers              123         
// indexs of pals   2,4   2,6  4,6  8,13  16,17  20,22  24,26
// remove           2,4 and 4,6 because they are within 2,6 range



function returnSubStringCount(s){
  let p1 = 0
  let p2 = 1
  let p3 = 2
  let pals = [] 
  
  while(p2 < s.length){  // p2 to handle if the last two chars make a pal
    if(s[p1] === s[p3]){
        let oddPal = buildPalindrome(s, p1, p3) // build full length pal
        pals = addToList(pals, oddPal)          // add to pals array if this new pal passes checks
        pals = removeFromList(pals, oddPal)     // run the remove function incase this pal is a larger version of previous pal
        p1++
        p2++
        p3++
    } else if(s[p1] === s[p2]){
        let evenPal = buildPalindrome(s, p1, p2)
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
  return pals.length > 0 ? pals : "No Palindrome Words Found"
}

// the ..AA.. OR ..ABA.. palindrome pattern was found...expand pointers to find total size of palindrome. Return pal string and indexs
function buildPalindrome(s, index1, index2){
  let pal = '';
  while(index1 >= 0 && index2 < s.length){
    if(s[index1] === s[index2]){
      pal = s.substring(index1, index2+1)
      index1--
      index2++
    } else {
      break
    }
  }
  return {
    pal: pal,
    index1: index1+1,
    index2: index2-1
  }
}

// logic for making sure we only return the full palindromes and not the sub palindromes unless it is stand alone.

// input string  =     'kjABABAtCGHHGCinAAokBABuABA' 
// pointers                      123         
// indexs of all pals       2,4   2,6  4,6  8,13  16,17  20,22  24,26
// remove 2,4 and 4,6 because they are within 2,6 range
// ending pal index pairs [[2,6],[8,13],[16,17],[20,22],[24,26]]

function removeFromList(pals, palToAdd){
 if(pals.length <= 1) return pals;
   pals = pals.filter(pal => 
     pal.index1 > palToAdd.index1 || 
     pal.index2 > palToAdd.index2 || 
     pal.index2 < palToAdd.index1 || 
     (pal.index1 === palToAdd.index1 && pal.index2 === palToAdd.index2)
   );
 return pals;
}

// function removeFromList(pals, palToAdd){
//   if(pals.length <= 1) return pals
//   let temp = []
//   for(const entry of pals){
//     if(entry.index1 === palToAdd.index1 && entry.index2 === palToAdd.index2) {
//         temp.push(entry);
//     } else if(entry.index1 <= palToAdd.index1 && entry.index2 <= palToAdd.index2 && entry.index2 >= palToAdd.index1 ){
//       continue
//     } else {
//       temp.push(entry)
//     }
//   }
//   return temp
// }


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

// test cases

let sentence = "kjABABAtCGHHGCinAAokBABuABA" // "ABABA", "CGHHGC", "AA", "BAB", "ABA"
// let sentence = "ABABABA"                     // "ABABABA"
// let sentence = "ATFHDYENJSIKELOPMNCBDHTE"    // "No Palindrome Words Found"
// let sentence = "ATFHDYENJSIKELOPMNCBDHTEAA"  // "AA"
// let sentence = "AATFHDYENJSIKELOPMNCBDHTEA"  // "AA"
// let sentence = "A"                           // "No Palindrome Words Found"  
// let sentence = "AA"                          // "AA" 
// let sentence = "AB"                          // "No Palindrome Words Found"
// let sentence = "ADT"                         // "No Palindrome Words Found"
// let sentence = "BBB"                         // "BBB"


console.log(returnSubStringCount(sentence))  // currently returns array of objects. Each obj is the palindrome string and indexs. This could just return the count, or an array of strings etc. 
