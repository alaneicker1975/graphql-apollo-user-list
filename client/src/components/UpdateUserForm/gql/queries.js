import { gql } from '@apollo/client';

export default gql`
  query User($id: ID!) {
    user(id: $id) {
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
