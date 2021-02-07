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
        if(map[data] !== el) return false
      }
    }
    if(stack.length > 0) return false
    return true
  }
  
  let str = "{[{[]}]}"
  console.log(isBalanced(str))