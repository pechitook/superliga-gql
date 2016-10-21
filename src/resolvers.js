import { getPlayersForLeague, listLeagues, getLeague, getPlayer } from './connectors'

const resolveFunctions = {
  Query: {
    league: (_, { name }) => getLeague(name),
    leagues: listLeagues,
    player: (_, { name }) => getPlayer(name)
  },
  League: {
    players(league){
      return getPlayersForLeague(league.name)
    }
  },
  Player: {
    stats: (player) => {},
    matches: (player) => []
  },
  Match: {
    home(){
      return {}
    },
    away(){
      return {}
    }
  }
}

export default resolveFunctions
