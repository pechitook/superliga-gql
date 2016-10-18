import { getPlayersForLeague, listLeagues, getLeague } from './connectors'

const resolveFunctions = {
  Query: {
    league: async (_, { name }) => getLeague(name),
    leagues: listLeagues
  },
  League: {
    players(league){
      return getPlayersForLeague(league.name)
    }
  },
  Match: {
    homePlayer(){
      return {}
    },
    awayPlayer(){
      return {}
    }
  }
}

export default resolveFunctions
