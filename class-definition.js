// Class definition 
// ES6
class Code {
    constructor(name, what, where) {
        this.name = name;
        this.greet(what, where);
    }
    greet(what, where) {
        console.log(`${what} ${where} ${this.name}`);
    }
}
const c = new Code('CodeTap', 'Welcome', 'to');
// Welcome to CodeTap

// ES5
var Tap = function(action, attribute, what) {
    this.action = action;
    this.goal(attribute, what);
}
Tap.prototype.goal = function(attribute, what) {
    console.log(this.action + ' ' + attribute + ' ' + what);
}
var t = new Tap('Build', 'professional', 'websites');
// Build professional websites





