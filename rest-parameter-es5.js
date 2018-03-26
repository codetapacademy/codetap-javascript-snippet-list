// Rest parameter ES5
function printIt(start, end) {
    var other = Array.prototype
                .slice.call(arguments, 2);
    return start + ' ' + 
            other.join(', ') + end;
} 
printIt('Welcome', 
        '!', 
        'Marian', 
        'John', 
        'Gratiela')
// will output
// Welcome Marian, John, Gratiela!

// http://youtube.com/codetap
// http://facebook.com/codetap
// http://codetap.io/info

