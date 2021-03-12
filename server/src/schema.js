const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    users(page: Int): AllUsers!
    user(id: ID!): SingleUser!
  }

  type Mutation {
    updateUser(
      id: ID!
      first_name: String
      last_name: String
      email: String
      avatar: String
    ): SingleUser
  }

  input UserInput {
    id: ID!
    first_name: String
    last_name: String
    email: String
    avatar: String
  }

  type AllUsers {
    page: Int
    per_page: Int
    total: Int
    total_pages: Int
    data: [User]
  }

  type SingleUser {
    data: User
  }

  type User {
    id: Int
    first_name: String
    last_name: String
    email: String
    avatar: String
  }
`;

module.exports = typeDefs;
