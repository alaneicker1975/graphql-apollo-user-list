import { gql } from '@apollo/client';

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    user: deleteUser(id: $id) {
      id
    }
  }
`;
