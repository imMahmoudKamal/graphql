import { ApolloServer, gql } from 'apollo-server';

const posts = [
  {
    id: '1',
    text: 'post one',
  },
  {
    id: '2',
    text: 'post two',
  },
];

const typeDefs = gql`
  type Post {
    id: String
    text: String
  }

  type Query {
    posts: [Post]
  }
`;

const resolvers = {
  Query: {
    posts: () => posts,
  },
};

export const app = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
});
