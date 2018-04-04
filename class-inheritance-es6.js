// Class inheritance ES6 explained
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    whoIsIt() {
        console.log(this.name);
    }
}
class ExtraPerson extends Person {
    constructor(name, age) {
        super(name, age);
    }
    whoIsIt() {
        super.whoIsIt(); // this calls Person.whoIsIt()
        console.log(`${this.name}, ${this.age}`)
    }
}
const p = new ExtraPerson('Marian', 36);
p.whoIsIt();
// Marian     <-- comes from line  8
// Marian, 36 <-- comes from line 17





