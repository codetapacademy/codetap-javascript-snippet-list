// Object and array matching with default values
// ES6
let name = {first: 'Marian'};
let list = ['buys'];
let {first, last = 'Zburlea'} = name;
let [get, buy = 'milk'] = list;
console.log(first, last, get, buy)
// Marian Zburlea buys milk

// ES5
var info = {brand: 'CodeTap'};
var brand = info.brand;
var type = info.type || 'Education';
var how = info.how || 'through';
var other = ['boosts'];
var action = other[0];
var what = other[1] || 'career';
var whos = other[2] || 'your';
console.log(brand, action, whos, what, how, type)
// CodeTap boosts your career through Education
