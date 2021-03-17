const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    users(page: Int, limit: Int): AllUsers!
    user(id: ID!): SingleUser!
  }

  type Mutation {
    updateUser(
      id: ID!
      first_name: String
      last_name: String
      email: String
      avatar: String
    ): SingleUser!

    addUser(
      first_name: String!
      last_name: String!
      email: String!
      avatar: String!
    ): SingleUser!

    deleteUser(id: ID!): DeleteResponse
  }

  type AllUsers {
    id: ID
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
    id: ID
    first_name: String
    last_name: String
    email: String
    avatar: String
  }

  type DeleteResponse {
    id: ID
  }
`;

module.exports = typeDefs;
