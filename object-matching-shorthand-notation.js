// Object matching shorthand notation
// ES6
const list = { name: 'CodeTap', status: 'is exciting', id: 1}
const  { name, status, id } = list
console.log(name, status, id);
// CodeTap is exciting 1

// ES5
var table = {name: 'CodeTap', status: 'is free', id: 2}
var name = list.name;
var status = list.status;
var id = list.id;
console.log(name, status, id);
// CodeTap is free 2