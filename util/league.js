import XLSX from 'xlsx'
import { getCellNumber, getRange } from './excel'

const getSheet = (sheetName) => {
  const workbook = XLSX.readFile(__dirname + '/../data/spreadsheet.xlsx');
  return workbook.Sheets[sheetName];
}

const getMatchesForPlayer = (playerName) => {
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
