var isValid = function(s) {
    
  var obj = {
      ')': '(',
      '}': '{',
      ']': '[',
  }
  var stack = [];
  
  for (var i = 0; i < s.length; i++) {   
      if (obj[s[i]]) {     
          if (stack.pop() !== obj[s[i]]) {
               return false
          }       
      } else stack.push(s[i]);        
  }
     
  return stack.length > 0 ? false : true;
  
};