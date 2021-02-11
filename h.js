const Heading = function(weight, text) {
  this.weight = weight;
  this.text = text
};
const Node = function(heading, children) {
  this.heading = heading;
  this.children = children;
};


/**
 * Converts a list of input headings into nested nodes
 * 
 * @param headings: Array of Headings as ordered in the input
 */
function toOutline(headings) {
    // Implement this function. Sample code below builds
    // an outline of only the first heading
    let firstNode = new Node(headings[0], []);
    let nodes = [firstNode];
    let root = new Node(new Heading(0, ""), [firstNode])

    for(let i = 1; i < headings.length; i++){
        let prevNode = nodes[nodes.length -1];    // keep track of last node in array
        let parentNode = root;                    // store 
        let weight = headings[i].weight           // current weight
        let text = headings[i].text
        let newNode = new Node(new Heading(weight, text), []);

        if(weight > headings[i-1].weight){        // current node weight more than previous..push to prev children
            prevNode.children.push(newNode);
        } else {
            for(let i = nodes.length -1; i >= 0; i--){      // solve for back to back h3 h3
                if(nodes[i].heading.weight < weight){      
                    parentNode = nodes[i]
                    break
                }
            }
            parentNode.children.push(newNode)
        }
        nodes.push(newNode)
    }
    
    return root
}
// Parses a line of the input
// This implementation is correct for all predefined test cases
function parse(record) {
  const firstSpace = record.indexOf(" ");
  const weight = parseInt(record.substr(1, firstSpace));
  const text = record.substr(firstSpace + 1);
  return new Heading(weight, text);
}

// Converts a node to HTML
function toHtml(node) {
  let childHtml = "";
  if (node.children.length > 0) {
    childHtml = `<ol>${node.children.map(child => `<li>${toHtml(child)}</li>`).join("\n")}</ol>`;
  }
  const heading = node.heading.text.length === 0 ? "" : node.heading.text + "\n";
  return heading + childHtml;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
  const headings = _input.split("\n").map(r => parse(r));
  const outline = toOutline(headings);
  console.log(toHtml(outline));
});



// Input (stdin)
// H1 All About Birds
// H2 Kinds of Birds
// H3 The Finch
// H3 The Swan
// H2 Habitats
// H3 Wetlands

// Your Output (stdout)
// <ol><li>All About Birds
// <ol><li>Kinds of Birds
// <ol><li>The Finch
// </li>
// <li>The Swan
// </li></ol></li>
// <li>Habitats
// <ol><li>Wetlands
// </li></ol></li></ol></li></ol>