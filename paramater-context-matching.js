// Paramater context matching
// ES6
const a = ([name, val]) => console.log(name, val);
const b = ({name: n, val: v}) => console.log(n, v);
const c = ({name, val}) => console.log(name, val);
a(['CodeTap', 36]); // CodeTap 36
b({name: 'Marian', val: 36}); // 3 Marian 36
c({name: 'Maya', val: 3}); // Maya 3
// ES5
var x = function(arg) {
    var name = arg[0],
        val = arg[1];
    console.log(name, val);
}
var y = function(arg) {
    var n = arg.name,
        v = arg.val;
    console.log(n, v);
}
var z = function(arg) {
    var name = arg.name,
        val = arg.val;
    console.log(name, val);
}
x(['Marian', 36]); // Marian 36
y({name: 'Code', val: 25}); // 3 Code 25
z({name: 'Tap', val: 2}); // Tap 2
