import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { maskErrors } from 'graphql-errors';
import { merge } from 'lodash';

import { SchemaDefinition, RootQuery, Mutation, tradie, jobAssignment, job  } from './TypeDefs';
import { tradieResolver, jobResolver, jobAssignmentResolver } from './Resolvers';

// maskErrors(typeDefs);

const formatError = error => ({
  message: error.message,
  locations: error.locations,
  stack: error.stack ? error.stack.split('\n') : [],
  path: error.path
});

const executableSchema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, Mutation, tradie, jobAssignment, job],
  resolvers: merge({}, tradieResolver, jobResolver, jobAssignmentResolver)
});

const start = async() => {
  const app = express();
  app.use('/graphql', graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
    formatError: formatError,
    // context: {} // context is where you can pass
  }));
  app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
}

start();
