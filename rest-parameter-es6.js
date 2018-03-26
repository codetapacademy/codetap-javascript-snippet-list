// Rest parameter ES6
const printIt = (start, end, ...other) 
    => console.log(
        `${start} ${other.join(', ')}${end}`
    )
printIt(
    'Welcome', 
    '!', 
    'Marian', 
    'John', 
    'Gratiela'
)
// will output
// Welcome Marian, John, Gratiela!

// http://youtube.com/codetap
// http://facebook.com/codetap
// http://codetap.io/info

