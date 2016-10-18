const typeDefinitions = `
type League {
  name: String,
  players: [Player]
}

type Player {
  name: String
  stats: Stats
  matches: [Match]
}

type Stats {
  points: Int
  gamesPlayed: Int
  gamesWon: Int
  gamesDrawed: Int
  gamesLost: Int
  goalsInFavor: Int
  goalsAgains: Int
  goalDifference: Int
}

type Match {
  homePlayer: Player
  homeScore: Int
  awayPlayer: Player
  awayScore: Int
}

type Query {
  league(name: String): League
  leagues: [League]
}

schema {
  query: Query
}
`

export default [typeDefinitions]
