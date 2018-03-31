// Fail soft destructuring
// ES6
const list = [2, 25]
const [a = 1, b = 2, c = 3, d] = list
console.log(a, b, c, d);
// 2 25 3 undefined

// ES5
var l = [2, 25]
var x = l[0] || 1,
    y = l[1] || 2,
    z = l[2] || 3,
    w = l[3] || undefined;
console.log(x, y, z, w);
// 2 25 3 undefined