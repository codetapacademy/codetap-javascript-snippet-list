// Array Matching
// ES6
const list = [1, 2, 3];
let [a, , b] = list;
// a === 1, b === 3
[b, a] = [a, b];
// b === 1, a === 3

// ES5
var table = [3, 5, 8];
var a = table[0],
    b = table[2];
// a === 3, b === 8
var t = a; a = b; b = t;
// a === 8, b === 3