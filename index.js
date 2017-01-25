'use strict'

const queryJson = require('query-json')
const type = require('type-detect')
const dotProp = require('dot-prop')

module.exports = function objSeach (obj = {}, pattern, defaultVal) {
  if (type(obj) !== 'Object') { throw new Error('Invalid object provided as argument') }

  if (type(pattern) === 'string') {
    return dotProp.get(obj, pattern, defaultVal)
  } else if (type(pattern) === 'RegExp') {
    const props = queryJson.search(obj, pattern).map((item) => item.join('.'))
    const values = props.map((item) => dotProp.get(obj, item, defaultVal))

    // Unnest if single value
    return values.length === 1 ? values[0] : values
  } else {
    throw new Error('Invalid pattern provided. It should be a String or RegExp')
  }
}

