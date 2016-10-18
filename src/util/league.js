import XLSX from 'xlsx'
import { getCellNumber, getRange } from './excel'

const getWorkbook = () => XLSX.readFile(__dirname + '/../../data/spreadsheet.xlsx')

const getSheet = (sheetName) => {
  return getWorkbook().Sheets[sheetName]
}

const getMatchesForPlayer = () => {
  return []
}

export const getPlayersForLeague = (league) => {
  const sheet = getSheet(league)
  return getRange(sheet, 'H5', 'H13').map(
    ({cell, value: name}) => ({
      name: name,
      stats: {
        points: sheet[`I${getCellNumber(cell)}`].v,
        gamesPlayed: sheet[`J${getCellNumber(cell)}`].v,
        gamesWon: sheet[`K${getCellNumber(cell)}`].v,
        gamesDrawed: sheet[`L${getCellNumber(cell)}`].v,
        gamesLost: sheet[`M${getCellNumber(cell)}`].v,
        goalsInFavor: sheet[`N${getCellNumber(cell)}`].v,
        goalsAgains: sheet[`O${getCellNumber(cell)}`].v,
        goalDifference: sheet[`P${getCellNumber(cell)}`].v,
      },
      matches: getMatchesForPlayer(name)
    })
  )
}

export const all = () => {
  return getWorkbook()
    .SheetNames
    .slice(1, 4)
    .map(name => ({ name }))
}

export const getLeagueByName = (name) => {
  switch (name) {
  case 'ELITE':
    return { name: 'Elite' }
  case 'LOC':
    return { name: 'La otra Categoria' }
  case 'PARALIGA':
    return { name: 'Paraliga' }
  }
}
