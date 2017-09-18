import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress , graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema'
import resolvers from './resolvers'

const PORT = 4000;

var app = express();

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.listen(PORT); 
