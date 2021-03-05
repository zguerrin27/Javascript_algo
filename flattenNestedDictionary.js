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

// const flatten = (source, parentPath = '', target = {}) => {

// for(const key in source){
//   // Construct the necessary pieces of metadata
//   const value = source[key]
//   const path = parentPath ? `${parentPath}.${key}` : key
  
//   // Either append or dive another level
//   if (typeof value === 'object'){
//     flatten(value, path, target)
//   } else {    
//     target[path] = source[key]
//   }
// }

// return target
// }

// To the outside world, you pass in dict, and you get a new object.
// No side effects happen, we're all good.
// console.log(flatten(dict))




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



// const flatten = (source, parentPath, result = {} ) => {
//   for(key in source){
//     let value = source[key]
//     let path = parentPath ? `${parentPath}.${key}` : key
//     if(typeof value === 'object' && value != ''){
//       flatten(value, path, result)
//     } else {   
//       result[path] = value == '' ? 'Never' : source[key]
//     }
//   }
//   return result
// }

// console.log(flatten(new_json))

// ===============================


let flatObj = {
  'Key1': '1',
  'Key2.a': '2',
  'Key2.b': '3',
  'Key2.c.d': '3',
  'Key2.c.e': '1',
  'car.revisions.0.miles': '0'
}

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


// function unflatten(data) {
//   var result = {}
//   for (const i in data) {
//     var keys = i.split('.')
//     keys.reduce((r, e, j) => {
//       return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? data[i] : {}) : [])
//     }, result)
//   }
//   return result
// }

const unflatten = obj =>
  Object.keys(obj).reduce((res, k) => {
    k.split('.').reduce(
      (acc, e, i, keys) =>
        acc[e] ||
        (acc[e] = isNaN(Number(keys[i + 1]))
          ? keys.length - 1 === i
            ? obj[k]
            : {}
          : []),
      res
    );
    return res;
  }, {});



// const flatObj = {
//   "firstName": "John",
//   "lastName": "Green",
//   "car.make": "Honda",
//   "car.model": "Civic",
//   "car.revisions.0.miles": 10150,
//   "car.revisions.0.code": "REV01",
//   "car.revisions.0.changes": "",
//      "car.revisions.1.miles": 20021,
//   "car.revisions.1.code": "REV02",
//   "car.revisions.1.changes.0.type":
//    "asthetic",
//   "car.revisions.1.changes.0.desc":
//   "Left tire cap", "car.revisions.1.changes.1.type":
//   "mechanic", "car.revisions.1.changes.1.desc":
//   "Engine pressure regulator",
//   "visits.0.date": "2015-01-01",
//   "visits.0.dealer": "DEAL-001",
//   "visits.1.date": "2015-03-01",
//   "visits.1.dealer": "DEAL-002"
// };

// const unflatten = (obj = {}) => {
//   const result = {};
//   let temp, substrings, property, i;
//   for (property in obj) {
//      substrings = property.split('.');
//   temp = result;
//   for (i = 0; i < substrings.length - 1; i++) {
//      if (!(substrings[i] in temp)) {
//         if (isFinite(substrings[i + 1])) {
//             temp[substrings[i]] = [];
//         }
//         else {
//            temp[substrings[i]] = {};
//         }
//      }
//      temp = temp[substrings[i]];
//   }
//   temp[substrings[substrings.length - 1]] = obj[property];
// }
// return result;
// }

console.log(JSON.stringify(unflatten(flatObj), undefined, 4));
// console.log(unflatten(flatObj))