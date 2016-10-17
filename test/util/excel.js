import { getCellNumber, getCellColumn } from 'src/util/excel'
import expect from 'expect'

describe('getCellNumber', () => {
  it('returns the number of a cell', () => {
    expect(getCellNumber('A3')).toBe(3)
    expect(getCellNumber('A33')).toBe(33)
  })
  it('returns NaN when invalid cell is passed', () => {
    expect(getCellNumber('ABC')).toEqual(NaN)
  })
})
describe('getCellColumn', () => {
  it('returns the column of a cell', () => {
    expect(getCellColumn('A3')).toBe('A')
  })
  it('works with double-letter columns', () => {
    expect(getCellColumn('AC33')).toBe('AC')
  })
})
