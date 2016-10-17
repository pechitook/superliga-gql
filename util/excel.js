import { range } from './collection'

export const getCellNumber = (cell) => parseInt(cell.match(/\w(\d*)/)[1])

export const getCellColumn = (cell) => cell.match(/^([A-Z])+/)[0]

export const getRange = (ws, c1, c2) => {
  const column = getCellColumn(c1)
  const cells = range(getCellNumber(c1), getCellNumber(c2));

  return cells.map(cell => ({
    cell: `${column}${cell}`,
    value: ws[`${column}${cell}`].v
  }))
}
