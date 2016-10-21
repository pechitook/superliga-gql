const typeDefinitions = `

enum LeagueName {
  ELITE
  LOC
  PARALIGA
}

type League {
  name: String,
  players: [Player]
}

type Player {
  name: String
  team: String
  stats: Stats
  matches(filter: MatchFilter): [Match]
}

type Stats {
  points: Int
  gamesPlayed: Int
  gamesWon: Int
  gamesDraw: Int
  gamesLost: Int
  goalsInFavor: Int
  goalsAgains: Int
  goalDifference: Int
}

type Match {
  home: MatchTeam
  away: MatchTeam
}

type MatchTeam {
  player: Player,
  score: Int
}

enum MatchFilter {
  WON
  LOST
  DRAW
  PLAYED
  UNPLAYED
  ALL
}

type Query {
  league(name: LeagueName!): League
  leagues: [League]
  player(name: String!): Player
}

schema {
  query: Query
}
`

export default [typeDefinitions]
