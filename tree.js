// // class Tree {
// //   constructor(root) {
// //     this._root = root || null;
// //   }

// //    _traverse(callback) {
// //     const self = this;
// //     function goThrough(node) {
// //       callback(node);
// //       node.children.forEach((child) => {
// //         goThrough(child);
// //       });
// //     }
// //     goThrough(this._root);  //goThrough(this._root, dash);
// //   }


// //   _addNode(value, parentValue) {
// //     const newNode = {
// //       value,
// //       children: []
// //     };

// //     if (this._root === null) {
// //       this._root = newNode;
// //       return;
// //     }

// //     this._traverse((node) => {
// //       if (node.value === parentValue) {
// //         node.children.push(newNode);
// //       }
// //     });
// //   }

// //   _removeNode(value) {
// //     this._traverse((node) => {
// //       node.children.forEach((childNode, index) => {
// //         if (childNode.value === value) {
// //           node.children.splice(index, 1);
// //         }
// //       });
// //     })
// //   }

// //   _search(value) {
// //     let returnNode = 'Not Found';
// //     this._traverse((node) => {
// //       if (node.value === value) {
// //         returnNode = node;
// //       }
// //     });
// //     return returnNode;
// //   }

// //   _displayLeafs(parentValue) {
// //     const parentNode = typeof parentValue === 'string' ? this._search(parentValue) : parentValue ;
// //     let leafsRet = [];
// //     if (parentValue.children && !parentValue.children.length) {
// //       return parentValue;
// //     }

// //     parentNode.children.forEach((child) => {
// //       leafsRet.push(this._displayLeafs(child));
// //     });

// //     return leafsRet.flat();
// //   }

// // }

// // class Node {
// //   constructor(value, children) {
// //     this.value = value;
// //     this.children = children;
// //   }
// // }

// // const tree = new Tree()

// // tree._addNode("First Article")
// // tree._addNode("Life is Like A Box", "First Article")
// // tree._addNode("Of chocolates", "Life is Like A Box")
// // tree._addNode("The quest to become", "First Article")
// // tree._addNode("An engineer!", "The quest to become")

// // console.log(tree)


// // console.log(tree._displayLeafs("_root"))





// //==============================


// function Node(data) {
//   this.data = data;
//   this.parent = null;
//   this.children = [];
// }

// function Tree(data) {
//   var node = new Node(data);
//   this._root = node;
// }

// Tree.prototype.traverseDF = function(callback) {

//   // this is a recurse and immediately-invoking function
//   (function recurse(currentNode) {
//       // step 2
//       for (var i = 0, length = currentNode.children.length; i < length; i++) {
//           // step 3
//           recurse(currentNode.children[i]);
//       }

//       // step 4
//       callback(currentNode);

//       // step 1
//   })(this._root);

// };

// Tree.prototype.traverseBF = function(callback) {
//   var queue = new Queue();

//   queue.enqueue(this._root);

//   currentTree = queue.dequeue();

//   while(currentTree){
//       for (var i = 0, length = currentTree.children.length; i < length; i++) {
//           queue.enqueue(currentTree.children[i]);
//       }

//       callback(currentTree);
//       currentTree = queue.dequeue();
//   }
// };

// Tree.prototype.contains = function(callback, traversal) {
//   traversal.call(this, callback);
// };

// Tree.prototype.add = function(data, toData, traversal) {
//   var child = new Node(data),
//       parent = null,
//       callback = function(node) {
//           if (node.data === toData) {
//               parent = node;
//           }
//       };

//   this.contains(callback, traversal);

//   if (parent) {
//       parent.children.push(child);
//       child.parent = parent;
//   } else {
//       throw new Error('Cannot add node to a non-existent parent.');
//   }
// };

// Tree.prototype.remove = function(data, fromData, traversal) {
//   var tree = this,
//       parent = null,
//       childToRemove = null,
//       index;

//   var callback = function(node) {
//       if (node.data === fromData) {
//           parent = node;
//       }
//   };

//   this.contains(callback, traversal);

//   if (parent) {
//       index = findIndex(parent.children, data);

//       if (index === undefined) {
//           throw new Error('Node to remove does not exist.');
//       } else {
//           childToRemove = parent.children.splice(index, 1);
//       }
//   } else {
//       throw new Error('Parent does not exist.');
//   }

//   return childToRemove;
// };

// function findIndex(arr, data) {
//   var index;

//   for (var i = 0; i < arr.length; i++) {
//       if (arr[i].data === data) {
//           index = i;
//       }
//   }

//   return index;
// }

// let myTree = new Tree('root')

// console.log(myTree)




// //=============================================


// class Employee {
//   constructor(id, name, managerId){
//     this.id = id;
//     this.name = name;
//     this.managerId = managerId;
//     this.children = [];
//   }
// }

// class OrgChart {
//   constructor(){
//     let node = new Employee(-1, "ROOT", null);
//     this.root = node;
//   }

//   add(id, name, managerId){
//     let root = this.root;
//     let newEmp = new Employee(id, name, managerId)
//     let allEmployeeIds = this.getAllIds();

//     if(!allEmployeeIds.includes(newEmp.managerId)){
//       newEmp.managerId = -1
//     }
    
//     if( newEmp.managerId === -1){
//       root.children.push(newEmp)
//     } else {
//       if(allEmployeeIds.includes(newEmp.id)){
//         console.log(newEmp.id, ": Employee id already exists")
//         return
//       } else {
//         let managerNode = this.DFS(root, newEmp.managerId)
//         managerNode.children.push(newEmp)
//       }
//     }
//   }

//   move(id, newManagerId){
//     let root = this.root;
//     let emp = this.DFS(root, id)
//     let newManager = this.DFS(root, newManagerId)
    
//     if(!emp || !newManager){
//       console.log("Employee from move attempt", emp)
//       console.log("manager from move attempt: ", newManager)
//       return null
//     } else {
//       let empOldManager = this.DFS(root, emp.managerId)
//       emp.managerId = newManagerId;
//       newManager.children.push(emp)
//       for(let i = 0; i < empOldManager.children.length; i++){
//         if(emp.id === empOldManager.children[i].id){
//           empOldManager.children.splice(i, 1)
//         }
//       }
//     }
//   }

//   remove(id){
//     let root = this.root;
//     let emp = this.DFS(root, id)
//     let manager = this.DFS(root, emp.managerId)
//     let managerChildren = manager.children;

//     if(!emp){
//       return null
//     } else {
//       for(const child of emp.children){
//         child.managerId = manager.id
//         managerChildren.push(child)
//       }
//       for(let i = 0; i < manager.children.length; i++){
//         if(emp.id === managerChildren[i].id){
//           managerChildren.splice(i, 1)
//         }
//       }
//     }
//   }

//   count(id){                                // BFS
//     let root = this.root;
//     let startingNode = this.DFS(root, id)
//     let array = []
//     let queue = [startingNode]

//     while(queue.length > 0){
//       let current = queue.shift()
//       array.push(current.id)
//       for(const child of current.children){
//         queue.push(child)
//       }
//     }
//     return array.length -1   // does this need to be a console.log()??? 
//   }

//   print(){
//     let root = this.root;
//     for(const child of root.children){
//       this.printTreeBranch(child)
//     }
//   }

//   printTreeBranch(node){
//     let indent = "";
//     let delimiter = "delimiter";
//     let queue = [node]
//     queue.push(delimiter)
//     while(queue.length > 0){
//       let current = queue.shift()
//       if(current !== delimiter){
//         console.log(indent + current.name + " " + "[" + current.id + "]")
//         for(const child of current.children){
//           queue.push(child)
//         }
//       } else {
//         indent += "  "
//         if(queue.length === 0)break
//         queue.push(delimiter)
//       }
//     }
//   }
 
//   DFS(node, id){
//     if(node.id === id){
//       return node
//     } else {
//       for(const child of node.children){
//         const found = this.DFS(child, id);
//         if(found) return found
//       }
//       return null
//     }
//   }
  
  
//   getAllIds(array = []){                        //BFS
//     let root = this.root;
//     let queue = [root]
//     while(queue.length > 0){
//       let current = queue.shift()
//       array.push(current.id)
//       for(const child of current.children){
//         queue.push(child)
//       }
//     }
//     return array
//   }

// }


// let orgChart = new OrgChart();

// // add(id, name, managerId)
// // orgChart.add(18, "zach - l1", -1)
// // orgChart.add(10, "Brian - l2", 18)
// // orgChart.add(27, "Karyn - l1", -1)
// // orgChart.add(7, "Tom - l2", 18)
// // orgChart.add(4, "Steve - l2", 18)
// // orgChart.add(2, "Ryan - l1", -1)
// // orgChart.add(19, "Bri - l2", 2)
// // orgChart.add(24, "Jon - l2", 2)
// // orgChart.add(242, "Bill - l2", 18)
// // orgChart.add(88, "Jess - l3", 7)

// // orgChart.add(88, "Toni", 7) // should throw error: id already utilzied 
// // orgChart.move(200, 18) // should not move 200 is invalid employee
// // orgChart.move(10, 200) // should not move 200 is invalid manager

// // orgChart.print()  // includes emp 19 in emp 2 children
// // orgChart.move(19, 18) // move emp 19 to emp 18 children, this also removes emp 19 from emp 2 children
// // // orgChart.remove(18)
// // console.log("========================")
// // orgChart.print()   // confirm emp 19 now belongs to emp 18 children, no longer in emp 2 children
// // console.log("========================")
// // orgChart.add(33, "Diesel", 18)
// // orgChart.print() // should have emp 33 added behind emp 19 in the children of emp 18

// // orgChart.add(44, "Bailey", 200)
// // orgChart.print() // this should show emp 44 in the -1 emp children


// orgChart.add(10, "Sharilyn Grubber", -1)
// orgChart.add(7, "Denice Mattice", 10)
// orgChart.add(3, "Lawana Futrell", -1)
// orgChart.add(34, "Lissette Gorney", 7)
// orgChart.add(5, "Lan Puls", 3)
// orgChart.print()
// console.log("===========")
// // orgChart.add(5, "Lan Puls", 3) // does not get added
// // orgChart.add(34, "Lissette Gorney", 7) // does not get added

// // orgChart.print()  // shows list correctly
// // orgChart.remove(10)  // remove emp 10
// // orgChart.print()
// // console.log("===========")
// // orgChart.add(180, "Tommy-Lee", 45)
// // orgChart.print()    // now emp 3 and children come before children of former employee 10, pretty sure it calls this out in directions
// // console.log("===========")
// // orgChart.move(180, 7)
// // orgChart.print()
// // console.log("===========")
// orgChart.add(789, "Rick", 7)
// orgChart.add(787, "Mohan", 10)
// orgChart.print()
// console.log("===========")

// orgChart.add(3455, "Spencer", 10)
// orgChart.add(4444, "Ava", 10)
// orgChart.print()
// console.log("===========")
// orgChart.add(4, "Jenny", 7)
// orgChart.print()
// console.log("===========")

// // console.log(orgChart.count(-1))


// //==================================

class Node{
  constructor(val, parent = null, children){
    this.val = val;
    this.parent = parent;
    this.children = []
  }
}

class Tree{
  constructor(){
    this.root = new Node(null, null)
  }
  
  add(val, parentVal){
    let root = this.root
    let node = new Node(val, parentVal)
    
    if(parentVal){
      let parentNode = this.dfs(root, parentVal)
      parentNode.children.push(node)
    } else {
      root.children.push(node)
    }
  }
  
  dfs(node, val){
    if(node.val === val){
      return node
    } else {
      for(const child of node.children){
        let found = this.dfs(child, val)
        if(found) return found
      }
      return false
    }
  }

  bfs(result = []){
    let root = this.root
    let queue = [root]
    while(queue.length > 0){
      let current = queue.shift()
      result.push(current)
      for(const child of current.children){
        queue.push(child)
      }
    }
    return result
  }


  
}

let tree = new Tree()
tree.add(10)
tree.add(20)
tree.add(30, 20)
console.log(tree)
console.log(tree.root.children[1].children)