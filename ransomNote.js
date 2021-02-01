// test to see if a ransom note can be made from clippings of magazine 
// given two arrays of strings 

function checkMagazine(magazine, note) {
  let map = { };
  let canBeMade = true;
  
  for(const word of magazine ) {
      map[word] = (map[word] || 0) + 1;       //first build up map with all words and num of occurances from magazine
  }

  for(const word of note ) {
      map[word] = (map[word] || 0) - 1;      // reduce map word and occuance by 1 for each occurance in note
  }

  for(const word in map ) {
      if ( map[word] < 0 ) {                 // there needs to be some left over...there for if the value is negative it means the note cant be made
          canBeMade = false;
          break;
      }
  }
  console.log(canBeMade ? 'Yes' : 'No');
}


let k = "apgo clm w lxkvg mwz elo bg elo lxkvg elo apgo apgo w elo bg"
let m = k.split(' ')

let j = "elo lxkvg bg mwz clm w"
let n = j.split(' ')

checkMagazine(m, n)