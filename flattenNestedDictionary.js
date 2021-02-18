//Flatten nested dictionary in any language using any method. first with a easy case then with unknown cases

// var keys = {'key1':1,'key2':{'key3':2,'key4':3,'key5':{'key6':4}}}
// let result = {};


// function serialize(keys, parentKey){
//     for(var key in keys){
//         if(parseInt(keys[key], 10)){
//             result[parentKey+key] = keys[key];
//         }else{
//             serialize(keys[key], parentKey+key+".");
//         }
//     }
// }
// serialize(keys, "");
// console.log(result);




const dict = {
  "Key1" : "1",
  "Key2" : {
      "a" : "2",
      "b" : "3",
      "c" : {
          "d" : "3",
          "e" : "1"
      }
  }
}

const flatten = (source, parentPath = '', target = {}) => {

for(const key in source){
  // Construct the necessary pieces of metadata
  const value = source[key]
  const path = parentPath ? `${parentPath}.${key}` : key
  
  // Either append or dive another level
  if (typeof value === 'object'){
    flatten(value, path, target)
  } else {    
    target[path] = source[key]
  }
}

return target
}

// To the outside world, you pass in dict, and you get a new object.
// No side effects happen, we're all good.
console.log(flatten(dict))





Object.unflatten = function(data) {
  "use strict";
  if (Object(data) !== data || Array.isArray(data))
      return data;
  var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
      resultholder = {};
  for (var p in data) {
      var cur = resultholder,
          prop = "",
          m;
      while (m = regex.exec(p)) {
          cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
          prop = m[2] || m[1];
      }
      cur[prop] = data[p];
  }
  return resultholder[""] || resultholder;
};

Object.flatten = function(data) {
  var result = {};
  function recurse (cur, prop) {
      if (Object(cur) !== cur) {
          result[prop] = cur;
      } else if (Array.isArray(cur)) {
           for(var i=0, l=cur.length; i<l; i++)
               recurse(cur[i], prop + "[" + i + "]");
          if (l == 0)
              result[prop] = [];
      } else {
          var isEmpty = true;
          for (var p in cur) {
              isEmpty = false;
              recurse(cur[p], prop ? prop+"."+p : p);
          }
          if (isEmpty && prop)
              result[prop] = {};
      }
  }
  recurse(data, "");
  return result;
}


// =========================================

var new_json = [{
  "name": "fatima",
  "age": 25,
  "neighbour": {
    "name": "taqi",
    "location": "end of the street",
    "property": {
      "built in": 1990,
      "owned": false,
      "years on market": [1990, 1998, 2002, 2013],
      "year short listed": [], //means never
    }
  },
  "town": "Mountain View",
  "state": "CA"
},
{
  "name": "qianru",
  "age": 20,
  "neighbour": {
    "name": "joe",
    "location": "opposite to the park",
    "property": {
      "built in": 2011,
      "owned": true,
      "years on market": [1996, 2011],
      "year short listed": [], //means never
    }
  },
  "town": "Pittsburgh",
  "state": "PA"
}]



const flatten = (source, parentPath, result = {} ) => {
  for(key in source){
    let value = source[key]
    let path = parentPath ? `${parentPath}.${key}` : key
    if(typeof value === 'object' && value != ''){
      flatten(value, path, result)
    } else {   
      result[path] = value == '' ? 'Never' : source[key]
    }
  }
  return result
}

console.log(flatten(new_json))

// ===============================

// balanced brackets.                                    done
// balanced brackets variations 
// reverse string                                        done
// reverse order of words in string with extra spaces    done
// reverse string but not delimiters
// flatten nested dictionary                             done
// flatten array                                         done
// merge two sorted lists

// build linked list 
// binary tree
// regular tree
// stack 
// queue
// heap and graph
// memoize fib

// what is a map
// hash table 
// 4 principles of OOP 
// time complexity 

// You should also review the tradeoffs for common algorithms such as divide and conquer, dynamic programming/memoization, graph traversals, and breadth-first search vs. depth- first search.



