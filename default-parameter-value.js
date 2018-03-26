/**
 * Default parameter value
 */
// ES6
const addNumbers = (a, b = 20, c = 5)
                => a + b + c
addNumbers(2) === 27 // true

// ES5
function addNumbers(a, b, c) {
    if (b === undefined)
        b = 20;
    if (c === undefined)
        c = 5;
    return a + b + c;
}
addNumbers(2) === 27 // true

// http://youtube.com/codetap
// http://facebook.com/codetap
// http://codetap.io/info




