// Object deep matching ES6
const list = {
    city: 'London',
    name: {
        first: 'Marian',
        last: 'Zburlea'
    },
    age: 36
}

const { city , name: {first, last}, age} = list;
console.log(city, first, last, age);
// London Marian Zburlea 36