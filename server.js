import express from 'express'
import { graphqlServerExpress, graphiqlExpress } from 'graphqlServerExpress'
import { makeExecutableSchema } from 'graphql-tools'
import bodyParser from 'body-parser'
import Schema from './src/schema'
import Resolvers from './src/resolvers'

const GRAPHQL_PORT = process.env.PORT || 4000

const graphQLServer = express()

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
})

graphQLServer.use('/graphql', bodyParser.json(), graphqlServerExpress({
  schema: executableSchema
}))

graphQLServer.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

/* eslint-disable no-console */
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
))
