// String interpolation ES6
const person = {name: 'John', pronoun: 'He'}
const info = {
    company: 'CodeTap',
    action: 'mastered',
    adjective: 'amazing'
}

const message = `${person.name} joined ${info.company}. ${person.pronoun} ${info.action} building websites and got an ${info.adjective} job`
// "John joined CodeTap. He mastered building websites and got an amazing job"