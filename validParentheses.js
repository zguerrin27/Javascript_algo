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
          console.log("stack", stack)
        } else {                            // current index in array is not a key in map, or is a closed bracket.
            let data = stack.pop()          // take the last item in stack array, top of stack item 
            console.log("data", data)
            console.log('map[data]', map[data])
            console.log('s[i]', s[i])
            console.log('============')
            
            if(map[data] !== s[i]) return false   //check if the the value of map[data] which would be map of open bracket..=== a closing bracket
        }
    }
    if(stack.length > 0) return false  //if there are left over open brackets...its false 
    return true
};

let str = "()[]{}"


console.log(isValid(str))