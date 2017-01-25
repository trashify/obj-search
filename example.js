const objSearch = require('./index')

const nestedObject = {
  foo: {
    bar: {
      baz: 'Hai',
      foo: 'Hi'
    }
  },
  foos: [
    1,
    2,
    3
  ]
}

console.log(objSearch(nestedObject, 'foo.bar')) // { baz: 'Hai', foo: 'Hi' }
console.log(objSearch(nestedObject, 'foo.bar.baz')) // 'Hai'
console.log(objSearch(nestedObject, /foo/)) // [ { bar: { baz: 'Hai', foo: 'Hi' } }, 'Hi', [ 1, 2, 3 ] ]

