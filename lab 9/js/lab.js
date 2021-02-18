`console.log("I am Linked!");

var moneyArray = ["$$$"];
var condenced;
var moneyCount = 0;

function letsGo() {
  let outputEl = document.getElementById("codeOut");
  let newEl = document.createElement("p");

  condenced = moneyArray.join('');
  newEl.innerHTML = condenced;

  moneyArray.push("$$$"); //[$$$,$$$]
  moneyCount++;
  console.log(moneyCount);

  newEl.id = "cash";
  outputEl.appendChild(newEl);
}

//if (moneyCount >= 3) {
//  document.elementwahtafegrt = GOLD
//}

/*
function myFunction() {
  var node = document.createElement("p");
  var textnode = document.createTextNode("Eggnog");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
}
*/
`
