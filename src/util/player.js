import {getDB} from '../db'

export const getPlayer = (name) => {
  const db = getDB()
  return new Promise((res)=> {
    db.cypher({
      query: 'MATCH (player:Jugador {name: {name}}) RETURN player',
      params: {name},
    }, (err, results) => {
      res(results[0]['player'].properties)
    })
  })
}