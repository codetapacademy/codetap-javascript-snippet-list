/**
 * delay - will invoke the provided function
 *      withe the specified delay
 */
// ES6
const dalay = (func, time, ...argList)
            => setTimeout(func, time, ...argList)

// Example:
const printIt = string => console.log(string)
delay(printIt, 2000, `JavaScript is awesome`)
// Will print `JavaScript is awesome` in the
// console after 2 seconds

// http://youtube.com/codetap
// http://facebook.com/codetap
// http://codetap.io/info

