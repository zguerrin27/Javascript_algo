const arr = [
  'Value 1', ['Inner value 1', 'Inner value 2', 'Inner value 3', 'Inner value 4'],
  'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6'
];
const prepareUL = (root, arr) => {
  let ul = document.createElement('ul');
  let li;
  root.appendChild(ul);
  arr.forEach(function(item) {
     if (Array.isArray(item)) {
        prepareUL(li, item);
        return;
     };
     li = document.createElement('li');
     li.appendChild(document.createTextNode(item));
     ul.appendChild(li);
  });
}
const div = document.getElementById('myList');
prepareUL(div, arr);