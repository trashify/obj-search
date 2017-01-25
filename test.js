import test from 'ava'
import objSeach from './index'
import type from 'type-detect'

const obj = {
  'name': 'Product',
  'properties':
  {
    'id':
    {
      'type': 'number',
      'description': 'Product identifier',
      'required': true
    },
    'name':
    {
      'description': 'Name of the product',
      'type': 'string',
      'required': true
    },
    'price':
    {
      'type': 'number',
      'minimum': 0,
      'required': true
    },
    'tags':
    {
      'type': 'array',
      'items':
      {
        'type': 'string'
      }
    }
  }
}

test('is a function', t => {
  t.true(type(objSeach) === 'function')
})

test('match a prop', t => {
  t.deepEqual(objSeach(obj, 'name'), 'Product')
})

test('match a nested prop', t => {
  const prop = {
    'type': 'number',
    'description': 'Product identifier',
    'required': true
  }

  t.deepEqual(objSeach(obj, 'properties.id'), prop)
})
