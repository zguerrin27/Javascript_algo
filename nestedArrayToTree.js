list = [
  ['lvl-1 item-1', 'lvl-2 item-1'],
  ['lvl-1 item-1', 'lvl-2 item-1', 'lvl-3 item-1'],
  ['lvl-1 item-1', 'lvl-2 item-1', 'lvl-3 item-2'],
  ['lvl-1 item-2', 'lvl-2 item-1', 'lvl-3 item-1'],
  ['lvl-1 item-2', 'lvl-2 item-2', 'lvl-3 item-2', 'lvl-4 item-1'],
]


function createTree(structure, topItem = "Top") {
  const node = (name, parent = null) => ({name, parent, children: []});
  const addNode = (parent, child) => (parent.children.push(child), child);
  const findNamedNode = (name, parent) => {
      for (const child of parent.children) {
          if (child.name === name) { return child }
          const found = findNamedNode(name, child);
          if (found) { return found }            
      }
  }
  const TOP_NAME = "Top";
  const top = node(TOP_NAME);
  var current;

  for (const children of structure) {
      current = top;
      for (const name of children) {
          const found = findNamedNode(name, current);
          current = found ? found : addNode(current, node(name, current.name));
      }
  }
  console.log(top.children[0].children)
  return top;
}

console.log(createTree(list))




//=============================================


list = [
  ['lvl-1 item-1', 'lvl-2 item-1'],
  ['lvl-1 item-1', 'lvl-2 item-1', 'lvl-3 item-1'],
  ['lvl-1 item-1', 'lvl-2 item-1', 'lvl-3 item-2'],
  ['lvl-1 item-2', 'lvl-2 item-1', 'lvl-3 item-1'],
  ['lvl-1 item-2', 'lvl-2 item-2', 'lvl-3 item-2', 'lvl-4 item-1']
]



function createTree(arr, topItem = "Top") {
  const node = (name, parent = null) => ({
    name,
    parent,
    children: []
  });
  const addNode = (parent, child) => {
    parent.children.push(child);

    return child;
  };
  const findNamedNode = (name, parent) => {
    for (const child of parent.children) {
      if (child.name === name) {
        return child
      }
      const found = findNamedNode(name, child);
      if (found) {
        return found
      }
    }
  };

  const top = node(topItem);
  let current;

  for (const children of arr) {
    current = top;
    for (const name of children) {
      const found = findNamedNode(name, current);
      current = found ? found : addNode(current, node(name, current.name));
    }
  }

  return top;
}

console.log(createTree(list, 'lvl-0 item-1'))