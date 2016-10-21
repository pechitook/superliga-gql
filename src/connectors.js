import * as League from './util/league'
import * as Player from './util/player'

export const getPlayersForLeague = (league) => League.getPlayersForLeague(league)
export const listLeagues = () => League.all()
export const getLeague = (name) => League.getLeagueByName(name)
export const getPlayer = (name) => Player.getPlayer(name)
