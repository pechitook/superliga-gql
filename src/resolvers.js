import { getPlayersForLeague, listLeagues, getLeague } from './connectors'

const resolveFunctions = {
  Query: {
    league: (_, { name }) => getLeague(name),
    leagues: listLeagues
  },
  League: {
    players (league) {
      return getPlayersForLeague(league.name)
    }
  },
  Match: {
    home () {
      return {}
    },
    away () {
      return {}
    }
  }
}

export default resolveFunctions
