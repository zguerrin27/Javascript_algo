var data = [{
  'text': 'Subjects',
  'data': [{
      'text': 'Geography',
      'data': []
  }, {
      'text': 'History',
      'data': [{
          'text': 'Ancient History',
          'data': []
      }]
  }]
}, {
  'text': 'Sports',
  'data': []
}, {
  'text': 'Music',
  'data': []
}];


// <ul>
// <li>Subjects
//     <ul>
//         <li>Geography</li>
//         <li>History
//             <ul>
//                 <li>Ancient History
//                 </li>
//             </ul>
//         </li>
//     </ul>
// </li>
// <li>Sports
// </li>
// <li>Music
// </li>



function json_tree(data) {
var json = "<ul>";

for(var i = 0; i < data.length; ++i) {
  json = json + "<li>" + data[i].text;
  if(data[i].data.length) {
      json = json + json_tree(data[i].data);
  }
  json = json + "</li>";
}
return json + "</ul>";
}

console.log(json_tree(data))