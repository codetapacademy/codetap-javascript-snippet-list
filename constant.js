// Constant ES6
const PI = 3.14159;
PI > 3.0 // true

// Constant ES5
var propertySetting = {
    enumerable: true,
    writable: false,
    configurable: false,
    value: 3.14159
};
var g = typeof global === 'object' ? 
        global : window;
Object.defineProperty(g, 'PI', propertySetting);
console.log(PI) // 3.14159
PI = 2;
console.log(PI) // 3.14159