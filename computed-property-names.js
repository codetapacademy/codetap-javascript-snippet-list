// Computed Property Names
// ES6
const p6 = () => 'fun'
const list = {
    name: 'CodeTap',
    ['fun-' + p6()]: 'coding'
}
// {name: "CodeTap", fun-fun: "coding"}

// ES5
var p5 = function () {
    return 'guy'
}
var table = {
    name: 'Marian'
}
table['cool-' + p5()] = 'Mentor'
// {name: "Marian", cool-guy: "Mentor"}