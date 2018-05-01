import { fakeDatabase } from './FakeDatabase';
import { GraphQLScalarType, GraphQLError } from 'graphql';
import { UserError } from 'graphql-errors';
const tradieResolver = {
  RootQuery: {
    tradie: (obj, args, context) => fakeDatabase.mockTradieData.filter((item) => args.id === item.id),
    alltradie: () => fakeDatabase.mockTradieData,
  },
  Mutation: {},
}

const jobAssignmentResolver = {
  RootQuery: {
    jobassignment: (obj, args, context) => fakeDatabase.mockJobAssignmentData.filter((item) => args.id === item.id),
    alljobAssignment: () => fakeDatabase.mockJobAssignmentData,
  },
  Mutation: {},  
}
const jobResolver = {
  RootQuery: {
    job: (obj, args, context) => fakeDatabase.mockJobData.filter((item) => {
      if (args.id === item.id) {
        return item;
      }
    }),
    alljobs: () => fakeDatabase.mockJobData,
  },
  Mutation: {},
}

export { tradieResolver, jobResolver, jobAssignmentResolver};