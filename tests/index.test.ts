import { test, expect } from '@jest/globals'

import { dataTypes } from 'savage-data-types'

test('hello', () => {
	expect(dataTypes.isObject({})).toEqual(true)
	expect(1).toBe(1)
})
