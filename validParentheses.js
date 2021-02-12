var isValid = function(s) {
    let map = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    }
    
    let stack = []
    
    for(let i = 0; i < s.length; i++){ 
        if(s[i] in map){              //checks keys of map. So if the current array index is an open brack..push it into the stack
            stack.push(s[i])
      
        } else {                            // current index in array is not a key in map, or is a closed bracket.
            let data = stack.pop()          // take the last item in stack array, top of stack item    
            if(map[data] !== s[i]) return false   //check if the the value of map[data] which would be map of open bracket..=== a closing bracket
        }
    }
    if(stack.length > 0) return false  //if there are left over open brackets...its false 
    return true
};

let str = "()[]{}"


console.log(isValid(str))





const isBalanced = (s) => {
    let map = {
      '(':')',
      '{':'}',
      '[':']'
    }
    let stack = []
    for(const el of s){
      if(el in map){           //if element is an open bracket
        stack.push(el)         // push onto top of stack
        
      } else {     // if element is closed bracket 
        
        let data = stack.pop()  //pop off top of stack. aka get last entered open bracket to see if element is pair 
        if(map[data] !== el) return false   // if the map[last open bracket on stack] !== current el no pair
      }
    }
    if(stack.length > 0) return false
    return true
  }
  
  let str = "{[{[]}]}"
  console.log(isBalanced(str))

//======================================
// Given a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.


  var checkValidString = function(s) {
    // beautiful thing about this problem is that we dont really need to see if there are matches.
    // go through and keep a count in stack... increment count for open or star
    // if closing bracket 
    // if stack less than 1 return false 
    // decrement stack 
    // go left to right
    
    // do same right to left 
    
    let stack = 0;
    for (let i = 0; i < s.length; i ++) {
        let character = s[i];
        if (character === '(' || character === '*') {
            stack ++;
        } else if (character === ')') {
            if (stack < 1) {
                return false;
            } else {
                stack --;
            }
        }
    }
    
    stack = 0;
    for (let i = s.length - 1; i >= 0; i --) {
        let character = s[i];
        if (character === ')' || character === '*') {
            stack ++;
        } else if (character === '(') {
            if (stack < 1) {
                return false;
            } else {
                stack --;
            }
        }
    }
    
    return true
    
};



var checkValidString = function(s) {
    
  const openStack = [];
  const starStack = [];
  
  for(let i = 0; i < s.length; i++) {
      
      if(s[i] === '(') {
          openStack.push(i);
      } else if (s[i] === '*') {
          starStack.push(i);
      } else {
          if(openStack.length > 0) {
              openStack.pop();
          } else if(starStack.length > 0) {
              starStack.pop();
          } else {
              return false;
          }
      }
  }

  let i = openStack.length - 1;
  let j = starStack.length - 1;
  
  while(openStack[i] < starStack[j]) {
      openStack.pop();
      starStack.pop();
      i--;
      j--;
  }
  
  if(openStack.length === 0) {
      return true;
  } else {
      return false;
  }
};


//======================================================================