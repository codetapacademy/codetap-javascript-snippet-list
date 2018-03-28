// Block Scoped Functions ES6
{
    const foo = () => 'code'
    foo() === 'code' // true
    {
        const foo = () => 'tap'
        foo() === 'tap' // true
    }
    foo() === 'code' // true
}