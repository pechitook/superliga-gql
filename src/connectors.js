import * as League from './util/league'

export const getPlayersForLeague = (league) => League.getPlayersForLeague(league)
export const listLeagues = () => League.all()
export const getLeague = (name) => League.getLeagueByName(name)
