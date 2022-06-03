import { GraphQLObjectType, GraphQLString } from 'graphql';

export const Post = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: GraphQLString,
    text: GraphQLString,
  }),
});
