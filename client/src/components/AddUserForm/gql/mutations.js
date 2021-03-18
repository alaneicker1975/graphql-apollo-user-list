import { gql } from '@apollo/client';

export default gql`
  mutation AddUser(
    $first_name: String!
    $last_name: String!
    $email: String!
    $avatar: String!
  ) {
    user: addUser(
      first_name: $first_name
      last_name: $last_name
      email: $email
      avatar: $avatar
    ) {
      data {
        id
        first_name
        last_name
        email
        avatar
      }
    }
  }
`;
