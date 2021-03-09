const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    posts: [Post]!
    post(id: ID!): Post
  }

  type Post {
    id: ID!
    userId: ID!
    title: String
    body: String
  }
`;

module.exports = typeDefs;
