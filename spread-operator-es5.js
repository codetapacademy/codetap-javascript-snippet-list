// Spread Operator ES5
var paramList = ["code", true, 25]

var otherList = [1, 2].concat(paramList)
// [1, 2, "code", true, 25]

var f = function(a, b, ...c) {
    var c = Array.prototype
                 .slice.call(arguments, 2)
    return (a + b) * c.length
}
f(3, 5, 'John', 'Ana', 'Maya') === 24

var name = 'codetap'
var charList = name.split("")
// ["c", "o", "d", "e", "t", "a", "p"]







