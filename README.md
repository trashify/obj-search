<div align="center">
  <strong>🔎 obj-search</strong>
</div>
<br>
<div align="center">
    <a href="https://github.com/feross/standard">
      <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
    </a>
    <a href="https://travis-ci.org/tiaanduplessis/obj-search">
      <img src="https://img.shields.io/travis/tiaanduplessis/obj-search/master.svg?style=flat-square" alt="Travis build" />
    </a>
    <a href="https://github.com/RichardLitt/standard-readme)">
      <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
    </a>
    <a href="https://badge.fury.io/gh/tiaanduplessis%2Fobj-search">
      <img src="https://badge.fury.io/gh/tiaanduplessis%2Fobj-search.svg?style=flat-square" alt="GitHub version" />
   </a>
   <a href="https://greenkeeper.io/">
      <img src="https://badges.greenkeeper.io/tiaanduplessis/obj-search.svg?style=flat-square" alt="Greenkeeper" />
   </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="http://tiaanduplessis.co.za">Tiaan du Plessis</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#introduction">Introduction</a></li>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#oss">OSS</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Introduction

[![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/obj-search.svg)](https://greenkeeper.io/)

Get a property from an object using dot path or Regexp.

## Install

**Install with npm**

```sh
$ npm install --save obj-search
```

**Install with yarn**

```sh
$ yarn add obj-search
```

## Usage

To use, require/import the module and call the function in the format:
```js
objSearch(objectToSearch, patternToLookFor, optionalDefaultValue)
```

An example of usage:

```js

const objSearch = require('obj-search')
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

```

## OSS

obj-search is made possible through Open Source Software. A very special thanks to all the [modules used](package.json).

## Contributing

All Contributions are welcome! Please open up an issue if you would like to help out. :smile:

## License

Licensed under the [MIT License](https://tiaan.mit-license.org/).
