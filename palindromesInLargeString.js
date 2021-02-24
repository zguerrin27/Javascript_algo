// return number of palindrome substrings in massive string
// dont count any smaller pal inside a larger pal

//there are even and odd length pals
//even has ...AA... in the middle 
//odd has ..ABA.. in the middle 



// let sent = 'kjABABAtCGHHGCinAAokBABuABA'  saaa
//                 123         
//               2,6

// start_index >= curr_start_index && end_index <= curr_end_index => remove existing elements in list

// start_index <= curr_start_index && end_index >= curr_end_index => dont add current element to list
//2 <= 4 && 6 <= 6


function returnSubStringCount(s, p1 = 0, p2 = 1, p3 = 2, count = 0){
  let pals = []

  
  while(p3 < s.length){
    
    if(s[p1] === s[p3]){
        let oddPal = buildOddPal(s, p1, p3)
        // console.log("ODD PAL", oddPal)
        
        // console.log(pals)
        pals = addToList(pals, oddPal)
        pals = removeFromList(pals, oddPal)
      
        // console.log(pals)
        
        // pals[oddPal] = true
        p1++
        p2++
        p3++
      
    } else if(s[p1] === s[p2]){
      
        let evenPal = buildEvenPal(s, p1, p2)
        //checks here
        pals = addToList(pals, evenPal)
        pals = removeFromList(pals, evenPal)
       
      
        // pals[evenPal] = true
        // console.log(pals)
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


function buildEvenPal(s, p1, p2){
  // console.log("EVEN PAL HIT")
  // console.log("EVEN INFO", s, s[p1], s[p2])
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

  return {
    pal: pal,
    index1: p1+1,
    index2: p2-1
  }
  
}


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

  return {
    pal: pal,
    index1: p1+1,
    index2: p3-1
  }
}


// start_index >= curr_start_index && end_index <= curr_end_index => remove existing elements in list

// start_index <= curr_start_index && end_index >= curr_end_index => dont add current element to list
//2 <= 4 && 6 <= 6

function removeFromList(pals, palToAdd){
  if(pals.length <= 1){
    return pals
  }
  console.log("R-0", pals)       
  let temp = []
  for(const entry of pals){
    if(entry.index1 <= palToAdd.index1 && entry.index2 <= palToAdd.index2){
      continue
    } else {
      temp.push(entry)
    }
  }
  // pals = pals.filter((pal) => ((pal.index1 < palToAdd.index1 && pal.index2 > palToAdd.index2) || (pal.index1 === palToAdd.index1 && pal.index2 === palToAdd.index2)))
  // pals = pals.filter((pal) => pal.index2 > palToAdd.index2 && pal.index1 )
  console.log("R-1", temp)
  return temp
}



function addToList(pals, palToAdd){
  console.log("A-0", pals)
  if(pals.find(pal => pal.index1 <= palToAdd.index1 && pal.index2 >= palToAdd.index2)){
    console.log("A-1", pals)
    return pals
  } else {
    pals.push(palToAdd)
    console.log("A-2", pals)
    return pals
  }
}



let sent = "kjABABAtCGHHGCinAAokBABuABA"
// let sent = 'kjABABA'
console.log(returnSubStringCount(sent))

// console.log(sent.substring(1, 3))