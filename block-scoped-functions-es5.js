// Block Scoped Functions ES5
(function() {
    var foo = function() {
        return 'code';
    };
    foo() === 'code'; // true
    (function() {
        var foo = function() {
            return 'tap';
        };
        foo() === 'tap'; // true
    })()
    foo() === 'code'; // true
})();