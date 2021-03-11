import { gql } from '@apollo/client';

export const GET_USER = gql`
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
