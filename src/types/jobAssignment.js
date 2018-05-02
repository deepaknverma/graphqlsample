import {
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList
} from 'graphql';
// NOTE: more info on types and their usage can be found here: https://github.com/mugli/learning-graphql/blob/master/7.%20Deep%20Dive%20into%20GraphQL%20Type%20System.md

export const jobAssignment = `
  type JobAssignment {
    id: Int!,
    hired: Boolean,
    assignedTradieId: Int
  }
`;

const jobAssignmentType = new GraphQLObjectType({
  name: 'JobAssignment',
  description: 'Job assignment',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The id of the job assignment.',
    },
    hired: {
      type: GraphQLBoolean,
      description: 'whether a job hired a tradie.',
    },
    assignedTradieId: {
      type: GraphQLInt,
      description: 'The id of the tradie',
    }
  })
});

export const jobAssignmentSchema = new GraphQLSchema({
  query: jobAssignmentType
});

