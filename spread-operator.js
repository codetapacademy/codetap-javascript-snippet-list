// Spread Operator ES6
const paramList = ["code", true, 25]

const otherList = [1, 2, ...paramList]
// 1, 2, "code", true, 25

const f = (a, b, ...c)
        => (a + b) * c
f(3, 5, 'John', 'Ana', 'Maya') === 24

const name = 'codetap'
const charList = [ ...name ]
// ["M", "a", "r", "i", "a", "n"]


