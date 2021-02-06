//Flatten nested dictionary in any language using any method. first with a easy case then with unknown cases

// var keys = {'key1':1,'key2':{'key3':2,'key4':3,'key5':{'key6':4}}}, result = {};


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