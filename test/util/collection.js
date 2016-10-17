import { range } from 'src/util/collection'
import expect from 'expect'

describe('range', () => {
  it('returns an array of numbers between range inclusively', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5])
  })
})
