// Select Dom Nodes. You can only iterate 
// using "for" or "forEach"
var nodeList = document
            .querySelectorAll('.codetap');

// Convert NodeList to true Array to gain
// "map", "filter", "reduce" etc
// ES5
nodeList = Array.from(nodeList);
// ES6
nodeList = [...nodeList]; 
// http://youtube.com/codetap
// http://facebook.com/codetap


