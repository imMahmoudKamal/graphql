import { ApolloServer, gql } from 'apollo-server';
import dotenv from 'dotenv';

// .env
dotenv.config();

const AllPosts = [
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

  type Mutation {
    createPost(text: String!): Post
  }
`;

const resolvers = {
  Query: {
    posts: () => AllPosts,
  },

  Mutation: {
    createPost: (_, { text }) => {
      AllPosts.push({ id: AllPosts.length + 1, text });

      return AllPosts[AllPosts.length - 1];
    },
  },
};

export const app = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cors: {
    origin: 'https://studio.apollographql.com',
    credentials: true,
  },
});
