// Sock merchant HackerRank
// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// Example
// There is one pair of color 1 and one of color 2 . There are three odd socks left, one of each color. The number of pairs is 2.

function sockMerchant(n, ar) {
  let pairs = {}
  let numOfPairs = 0

  for(let i = 0; i < ar.length; i++){
    if(!pairs[ar[i]]){                   // build map of pairs
      pairs[ar[i]] = 1
    } else {
      pairs[ar[i]]++                  
      if(pairs[ar[i]] = 2){               // once pairs = 2...we increment num of pairs found by 1
        numOfPairs++
        pairs[ar[i]] = 0                  // then set map num back to 0 so that each time it hits 2..we increment pairs found
      }
    }
  }

return numOfPairs
}


ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
n = 9

console.log(sockMerchant(n, ar))  // 3