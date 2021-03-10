const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    users(page: Int): AllUsers!
    user(id: ID!): SingleUser!
  }

  type AllUsers {
    page: Int
    per_page: Int
    total: Int
    total_pages: Int
    data: [User]
  }

  type SingleUser {
    support: Support
    data: User
  }

  type Support {
    url: String
    text: String
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
