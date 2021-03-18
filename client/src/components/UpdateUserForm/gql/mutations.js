import { gql } from '@apollo/client';

export default gql`
  mutation UpdateUser(
    $id: ID!
    $first_name: String
    $last_name: String
    $email: String
    $avatar: String
  ) {
    user: updateUser(
      id: $id
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
